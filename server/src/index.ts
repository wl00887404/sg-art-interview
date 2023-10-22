import Express from 'express';
import connectDatabase from './connectDatabase';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import { createSuccessResponse, createFailedResponse } from './createResponse';

import dotenv from 'dotenv';
dotenv.config();

import User from './modules/User';
import todosRouter from './routes/todos';

const PORT = 3001;
const { JWT_SECRET } = process.env;

const app = Express();
app.use(Express.json());
app.use(cookieParser());

connectDatabase();

app.use('*', async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) return next();

  try {
    const payload = jwt.verify(token, JWT_SECRET!) as { email: string };

    const user = await User.findOne({ email: payload.email });
    if (user === null) throw new Error('查無此使用者');

    req.user = user;
  } catch (error) {
    // jwt token expired
    res.clearCookie('token');
  }

  return next();
});

app.get('/api', (_req, res) => {
  res.send({ hello: 'world' });
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user === null) {
    return res.json(createFailedResponse('查無此使用者'));
  }

  const isPasswordCompared = await user.comparePassword(password);
  if (!isPasswordCompared) {
    return res.json(createFailedResponse('密碼錯誤'));
  }

  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const token = jwt.sign({ email, exp: expires.getTime() / 1000 }, JWT_SECRET!);

  res.cookie('token', token, {
    expires,
    httpOnly: true,
    secure: true,
  });

  return res.json(createSuccessResponse({ token }));
});

app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;

  const hasExisted = await User.find({ email }).count();
  if (hasExisted) {
    return res.json(createFailedResponse('此 Email 已經被註冊過了'));
  }

  const user = new User({ email, password });
  await user.hashPassword();
  await user.save();

  return res.json(
    createSuccessResponse({
      user: {
        id: user.id,
        email: user.email,
        todos: user.todos,
      },
    }),
  );
});

app.use('/api/todos', todosRouter);

app.listen(3001, function () {
  console.log(`Server is on http://localhost:${PORT}/api`);
});
