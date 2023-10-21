import { useRef } from 'react';
import styled from 'styled-components';
import typography from './typography';

const Container = styled.div`
  display: flex;
  color: var(--white);
  ${typography.normal}
`;

const Input = styled.input`
  display: none;
`;

const Button = styled.button`
  background: transparent;
  border: 1px solid var(--white);
  border-radius: 2px;
  width: 0.9375rem;
  height: 0.9375rem;
  margin: 0.125rem 0.375rem 0 0;
  color: var(--white);
  padding: 0;
  line-height: inherit;
  cursor: pointer;
  overflow: hidden;
`;

const TranslateUpText = styled.div`
  transform: translate(0, -0.125rem);
`;

type Props = {
  checked: boolean;
  children: React.ReactNode;
  onChange: (checked: boolean) => void;
};

const Checkbox = (props: Props) => {
  const { checked, children, onChange } = props;
  const checkboxRef = useRef<HTMLInputElement>(null);
  const onCheckboxChange = () => {
    onChange(checkboxRef.current!.checked);
  };

  const onButtonClick = () => checkboxRef.current!.click();

  return (
    <Container>
      <Button role="checkbox" onClick={onButtonClick}>
        {checked && <TranslateUpText>v</TranslateUpText>}
      </Button>
      <label>
        <Input
          type="checkbox"
          checked={checked}
          ref={checkboxRef}
          onChange={onCheckboxChange}
        />
        {children}
      </label>
    </Container>
  );
};

export default Checkbox;
