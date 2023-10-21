import styled from 'styled-components';

import IconButton from '../shared/IconButton';
import CrossIcon from '../shared/CrossIcon';
import Checkbox from '../shared/Checkbox';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  position: relative;
  padding-left: 1rem;
`;

const Strikethrough = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0;
  right: -0.4375rem;
  height: 1px;
  background: white;
  pointer-events: none;
`;

type Props = {
  id: string;
  finished: boolean;
  content: string;
  setTodoFinished: (id: string, finished: boolean) => void;
};

const Item = (props: Props) => {
  const { id, finished, content } = props;

  const setTodoFinished = (finished: boolean) => {
    props.setTodoFinished(id, finished);
  };

  return (
    <Container>
      <Checkbox checked={finished} onChange={setTodoFinished}>
        {content}
      </Checkbox>
      <IconButton>
        <CrossIcon />
      </IconButton>
      {finished && <Strikethrough />}
    </Container>
  );
};

export default Item;
