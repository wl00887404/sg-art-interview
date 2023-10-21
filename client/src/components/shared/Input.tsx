import styled from 'styled-components';
import typography from './typography';

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  &::placeholder {
    color: var(--primary-color);
  }

  background: transparent;
  padding: 0.625rem 1.1875rem;
  border-radius: 1.875rem;

  ${typography.normal}
`;

export default StyledInput;
