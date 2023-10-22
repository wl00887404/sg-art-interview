type Todo = {
  id?: string;
  content: string;
  finished: boolean;
};

type User = {
  id?: string;
  email: string;
  password: string;
  todos: Todo[];
  save: () => void;
};

declare namespace Express {
  export interface Request {
    user?: User;
  }
}
