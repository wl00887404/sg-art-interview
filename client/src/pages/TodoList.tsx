import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import Input from '../components/shared/Input';
import TodoListComponent from '../components/TodoList/TodoList';
import typography from '../components/shared/typography';

import { Todo } from '../components/TodoList/types';
import axios from 'axios';

const Container = styled.div`
  padding: 2.5rem;
  max-width: 33.75rem;
  margin: 0 auto;
`;

const Title = styled.h1`
  ${typography.heading}
  color: var(--white);
  text-align: center;
  margin-bottom: 1.375rem;
`;

const InputContainer = styled.div`
  margin-bottom: 1.625rem;
`;

const TodoListContainer = styled.div`
  width: 26.875rem;
  margin: 0 auto;
`;

type Props = {
  todos: Todo[];
  isLogged: boolean;
};

function TodoList(props: Props) {
  const { isLogged } = props;
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState<Todo[]>(props.todos);

  const addTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputValue) return;

    if (isLogged) {
      const { data } = await axios.put('/api/todos', { content: inputValue });

      if (data.status !== 'success') {
        return alert(data.message);
      }

      setTodos([data.todo, ...todos]);
    } else {
      const tempId = Date.now().toString();
      const newTodo = {
        id: tempId,
        content: inputValue,
        finished: false,
      };
      setTodos([newTodo, ...todos]);
    }

    setInputValue('');
  };

  const setTodoFinished = async (id: string, finished: boolean) => {
    if (isLogged) {
      const { data } = await axios.post('/api/todos', { id, finished });

      if (data.status !== 'success') {
        return alert(data.message);
      }
    }

    const nextTodos = todos.map(todo => {
      if (todo.id !== id) return todo;

      return { ...todo, finished };
    });

    setTodos(nextTodos);
  };

  const deleteTodo = async (id: string) => {
    if (isLogged) {
      const params = { id };
      const { data } = await axios.delete('/api/todos', { params });

      if (data.status !== 'success') {
        return alert(data.message);
      }
    }

    const nextTodos = todos.filter(todo => todo.id !== id);
    setTodos(nextTodos);
  };

  return (
    <Container>
      <Title>TODO</Title>
      <InputContainer>
        <form onSubmit={addTodo}>
          <Input
            placeholder="輸入代辦事項"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
        </form>
      </InputContainer>
      <TodoListContainer>
        <TodoListComponent
          todos={todos}
          setTodoFinished={setTodoFinished}
          deleteTodo={deleteTodo}
        />
      </TodoListContainer>
    </Container>
  );
}

const LoadingPage = () => {
  return (
    <Container>
      <Title>Loading</Title>
    </Container>
  );
};

const TodoListWithData = () => {
  const isLoggedRef = useRef(false);
  const [isLoading, setIsLoading] = useState(true);
  const [todosStore, setTodosStore] = useState([]);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const { data } = await axios.get('/api/todos');

      if (data.status === 'success') {
        isLoggedRef.current = true;
        setTodosStore(data.todos);
      }

      setIsLoading(false);
    };

    checkLoginStatus();
  }, []);

  if (isLoading) return <LoadingPage />;

  return <TodoList todos={todosStore} isLogged={isLoggedRef.current} />;
};

export default TodoListWithData;
