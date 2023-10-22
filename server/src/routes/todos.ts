import Express from 'express';
import { createSuccessResponse, createFailedResponse } from '../createResponse';

const todosRouter = Express.Router();

todosRouter.use((req, res, next) => {
  const { user } = req;

  if (!user) {
    return res.json(createFailedResponse('授權失敗'));
  }

  next();
});

todosRouter.get('/', (req, res) => {
  const { user } = req;

  return res.json(
    createSuccessResponse({
      todos: user!.todos,
    }),
  );
});

todosRouter.post('/', (req, res) => {
  const { user } = req;
  const { id, finished } = req.body;

  const todo = user!.todos.find((todo: any) => todo.id === id);
  todo!.finished = finished;
  user!.save();

  return res.json(
    createSuccessResponse({
      todos: user!.todos,
    }),
  );
});

todosRouter.put('/', (req, res) => {
  const { user } = req;
  const { content } = req.body;

  user!.todos.push({ content, finished: false });
  user!.save();

  return res.json(
    createSuccessResponse({
      todos: user!.todos,
    }),
  );
});

todosRouter.delete('/', (req, res) => {
  const { user } = req;
  const { id } = req.query;

  user!.todos = user!.todos.filter(todo => todo.id !== id);
  user!.save();

  return res.json(
    createSuccessResponse({
      todos: user!.todos,
    }),
  );
});

export default todosRouter;
