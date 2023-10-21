import styled from 'styled-components';
import typography from './typography';

const StyledInput = styled.input`
  width: 100%;
  border: none;
  box-shadow: 0 0 0 0.8px var(--primary-color) inset;
  color: var(--primary-color);
  &::placeholder {
    color: var(--primary-color);
  }
  background: transparent;
  padding: 0.625rem 0.75rem;
  border-radius: 1.25rem;

  ${typography.normal}
`;

const ErrorMessage = styled.div`
  padding: 0 0.75rem;
  color: var(--error);
  ${typography.small}

  &:not(:empty)::before {
    content: '* ';
  }
`;

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type Props = InputProps & {
  error?: string;
};

const Input = (props: Props) => {
  const { error, ...otherProps } = props;

  return (
    <div>
      <StyledInput {...otherProps} />
      <ErrorMessage>{error}</ErrorMessage>
    </div>
  );
};

export default Input;
