import { css } from 'styled-components';

export const normal = css`
  font-size: 0.8125rem;
  line-height: 1.125rem;
  letter-spacing: 0.03em;
  font-weight: 400;
`;

export const heading = css`
  font-size: 1.25rem;
  line-height: 1.125rem;
  letter-spacing: 0.1em;
  font-weight: 600;
`;

const typography = { normal, heading };

export default typography;
