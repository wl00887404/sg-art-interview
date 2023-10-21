import styled, { css } from 'styled-components';
import TodoItem from './TodoItem';
import typography from '../shared/typography';
import { useState } from 'react';

const scrollbarStyle = css`
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-track {
    border: 1px solid var(--primary-color);
    border-radius: 1.875rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 1.875rem;
    background-color: var(--primary-color);
  }
`;

const List = styled.div`
  max-height: 11.3125rem;
  overflow-y: scroll;
  padding-right: 0.875rem;
  margin-bottom: 0.9375rem;

  ${scrollbarStyle}

  & > * + * {
    margin-top: 16px;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      top: -7px;
      left: 0;
      right: 0;
      height: 0.05rem;
      background: var(--primary-color);
    }
  }
`;

const FinishedCount = styled.div`
  color: var(--white);
  text-align: right;
  ${typography.normal};
`;

type Todo = {
  id: string;
  finished: boolean;
  content: string;
};

type Props = {
  todos?: Todo[];
};

const defaultTodos = [
  { id: '1', finished: true, content: '代辦事項' },
  { id: '2', finished: false, content: '代辦事項' },
  { id: '3', finished: false, content: '代辦事項' },
  { id: '4', finished: false, content: '代辦事項' },
  { id: '5', finished: false, content: '代辦事項' },
  { id: '6', finished: false, content: '代辦事項' },
  { id: '7', finished: false, content: '代辦事項' },
  { id: '8', finished: false, content: '代辦事項' },
  { id: '9', finished: false, content: '代辦事項' },
  { id: '10', finished: false, content: '代辦事項' },
  { id: '11', finished: false, content: '代辦事項' },
  { id: '12', finished: false, content: '代辦事項' },
  { id: '13', finished: false, content: '代辦事項' },
  { id: '14', finished: false, content: '代辦事項' },
  { id: '15', finished: false, content: '代辦事項' },
];

const TodoList = (_props: Props) => {
  const [todos, setTodos] = useState(defaultTodos);
  const finishedCount = todos.filter(todo => todo.finished).length;

  const setTodoFinished = (id: string, finished: boolean) => {
    const nextTodos = todos.map(todo => {
      if (todo.id !== id) return todo;

      return { ...todo, finished };
    });

    setTodos(nextTodos);
  };

  return (
    <div>
      <List>
        {todos.map(todo => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              setTodoFinished={setTodoFinished}
            />
          );
        })}
      </List>
      <FinishedCount>
        ( {finishedCount}/{todos.length} )
      </FinishedCount>
    </div>
  );
};

export default TodoList;
