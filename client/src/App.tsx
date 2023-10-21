import styled from 'styled-components';

import Input from './components/shared/Input';
import TodoList from './components/TodoList/TodoList';
import typography from './components/shared/typography';

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

function App() {
  return (
    <Container>
      <Title>TODO</Title>
      <InputContainer>
        <Input placeholder="輸入代辦事項" />
      </InputContainer>
      <TodoListContainer>
        <TodoList />
      </TodoListContainer>
    </Container>
  );
}

export default App;
