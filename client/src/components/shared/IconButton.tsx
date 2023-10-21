import styled from 'styled-components';

const Button = styled.button`
  width: 1.25rem;
  height: 1.25rem;
  background: var(--dark-gray);
  color: var(--white);
  display: grid;
  place-items: center;
  border: none;
  padding: 0;
  border-radius: 50%;
  cursor: pointer;
`;

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type Props = ButtonProps & {
  children: React.ReactNode;
};

const IconButton = (props: Props) => {
  const { children, ...otherProps } = props;

  return <Button {...otherProps}>{children}</Button>;
};

export default IconButton;
