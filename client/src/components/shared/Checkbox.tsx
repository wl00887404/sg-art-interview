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
  margin: var(--checkbox-margin-top, 0.125rem) 0.375rem 0 0;
  color: var(--white);
  padding: 0;
  line-height: inherit;
  cursor: pointer;
  overflow: hidden;
`;

const Indicator = styled.div`
  transform: translate(0, calc(var(--checkbox-margin-top, 0.125rem) * -1));
`;

type Props = {
  checked: boolean;
  children: React.ReactNode;
  className?: string;
  onChange?: (checked: boolean) => void;
};

const Checkbox = (props: Props) => {
  const { checked, children, onChange, className } = props;
  const checkboxRef = useRef<HTMLInputElement>(null);
  const onCheckboxChange = () => {
    if (!onChange) return;
    onChange(checkboxRef.current!.checked);
  };

  const onButtonClick = () => checkboxRef.current!.click();

  return (
    <Container className={className}>
      <Button role="checkbox" onClick={onButtonClick}>
        {checked && <Indicator>v</Indicator>}
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
