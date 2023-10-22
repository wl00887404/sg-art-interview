import { useState } from 'react';
import styled from 'styled-components';

import Input from '../components/shared/Input';
import TodoList from '../components/TodoList/TodoList';
import typography from '../components/shared/typography';

import { Todo } from '../components/TodoList/types';

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

const defaultTodos: Todo[] = [
  { id: '1', finished: true, content: '代辦事項 1' },
  { id: '2', finished: false, content: '代辦事項 2' },
  { id: '3', finished: false, content: '代辦事項 3' },
  { id: '4', finished: false, content: '代辦事項 4' },
  { id: '5', finished: false, content: '代辦事項 5' },
  { id: '6', finished: false, content: '代辦事項 6' },
  { id: '7', finished: false, content: '代辦事項 7' },
  { id: '8', finished: false, content: '代辦事項 8' },
  { id: '9', finished: false, content: '代辦事項 9' },
  { id: '10', finished: false, content: '代辦事項 10' },
  { id: '11', finished: false, content: '代辦事項 11' },
  { id: '12', finished: false, content: '代辦事項 12' },
  { id: '13', finished: false, content: '代辦事項 13' },
  { id: '14', finished: false, content: '代辦事項 14' },
  { id: '15', finished: false, content: '代辦事項 15' },
];

function TodoListPage() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState<Todo[]>(defaultTodos);

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputValue) return;

    const tempId = Date.now().toString();
    const newTodo = {
      id: tempId,
      content: inputValue,
      finished: false,
    };

    setInputValue('');
    setTodos([newTodo, ...todos]);
  };
  const setTodoFinished = (id: string, finished: boolean) => {
    const nextTodos = todos.map(todo => {
      if (todo.id !== id) return todo;

      return { ...todo, finished };
    });

    setTodos(nextTodos);
  };
  const deleteTodo = (id: string) => {
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
        <TodoList
          todos={todos}
          setTodoFinished={setTodoFinished}
          deleteTodo={deleteTodo}
        />
      </TodoListContainer>
    </Container>
  );
}

export default TodoListPage;
