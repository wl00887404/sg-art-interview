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
  if (todo == null) {
    return res.json(createFailedResponse(`找不到 id 為 ${id} 的代辦事項`));
  }
  todo!.finished = finished;
  user!.save();

  return res.json(
    createSuccessResponse({
      todo,
    }),
  );
});

todosRouter.put('/', (req, res) => {
  const { user } = req;
  const { content } = req.body;

  user!.todos.unshift({ content, finished: false });
  user!.save();

  return res.json(
    createSuccessResponse({
      todo: user!.todos[0],
    }),
  );
});

todosRouter.delete('/', (req, res) => {
  const { user } = req;
  const { id } = req.query;

  const deletedTodo = user!.todos.find(todo => todo.id === id);

  if (deletedTodo == null) {
    return res.json(createFailedResponse(`找不到 id 為 ${id} 的代辦事項`));
  }

  user!.todos = user!.todos.filter(todo => todo.id !== id);
  user!.save();

  return res.json(
    createSuccessResponse({
      todo: deletedTodo,
    }),
  );
});

export default todosRouter;
