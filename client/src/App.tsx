import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import TodoList from './pages/TodoList';
import LoginDialog from './pages/LoginDialog';
import RegisterDialog from './pages/RegisterDialog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <TodoList />,
  },
  {
    path: '/login',
    element: <LoginDialog />,
  },
  {
    path: '/register',
    element: <RegisterDialog />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
