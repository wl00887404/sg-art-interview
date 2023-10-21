import styled from 'styled-components';
import typography from './typography';

const Container = styled.div`
  width: 22.5rem;
  padding: 0 0.75rem;
  margin: 5.125rem auto 0;
`;

const Card = styled.div`
  padding: 3.5rem 1.5rem;
  font-family: 'Noto Sans TC';
  background: rgba(55, 43, 75, 0.95);
  border-radius: 0.75rem;
`;

const TitleContainer = styled.div`
  text-align: center;
`;

const Title = styled.span`
  ${typography.bold}
  padding: 0.0625rem 1rem 0.125rem;
  background: var(--primary-color);
  color: var(--white);
`;

type Props = {
  title?: string;
  children?: React.ReactNode;
};

const Dialog = (props: Props) => {
  const { title, children } = props;

  return (
    <Container>
      <Card>
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
        {children}
      </Card>
    </Container>
  );
};

export default Dialog;
