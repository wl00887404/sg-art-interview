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
  height: 11.3125rem;
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
  todos: Todo[];
  setTodoFinished: (id: string, finished: boolean) => void;
  deleteTodo: (id: string) => void;
};

const TodoList = (props: Props) => {
  const { todos, setTodoFinished, deleteTodo } = props;
  const finishedCount = todos.filter(todo => todo.finished).length;

  return (
    <div>
      <List>
        {todos.map(todo => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              setTodoFinished={setTodoFinished}
              deleteTodo={deleteTodo}
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
