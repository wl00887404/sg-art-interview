import styled from 'styled-components';
import typography from './typography';

export const GhostButton = styled.button`
  background: transparent;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);

  min-width: 5.75rem;
  padding: 0.375rem 0 0.4375rem;
  text-align: center;
  border-radius: 1.875rem;

  ${typography.normal}
`;

export const PrimaryButton = styled(GhostButton)`
  background: var(--primary-color);
  color: var(--white);

  ${typography.bold}
`;
