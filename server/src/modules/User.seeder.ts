import connectDatabase from '../connectDatabase';
import User from './User';

const main = async () => {
  await connectDatabase();

  const newUser = new User({
    email: 'foo@bar.com',
    password: '12345678',
    todos: [
      { finished: true, content: '代辦事項 1' },
      { finished: false, content: '代辦事項 2' },
      { finished: false, content: '代辦事項 3' },
      { finished: false, content: '代辦事項 4' },
      { finished: false, content: '代辦事項 5' },
      { finished: false, content: '代辦事項 6' },
      { finished: false, content: '代辦事項 7' },
      { finished: false, content: '代辦事項 8' },
      { finished: false, content: '代辦事項 9' },
      { finished: false, content: '代辦事項 10' },
      { finished: false, content: '代辦事項 11' },
      { finished: false, content: '代辦事項 12' },
      { finished: false, content: '代辦事項 13' },
      { finished: false, content: '代辦事項 14' },
      { finished: false, content: '代辦事項 15' },
    ],
  });

  await newUser.hashPassword();
  await newUser.save();

  process.exit();
};

main();
