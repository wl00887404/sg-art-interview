import { css } from 'styled-components';

export const normal = css`
  font-size: 0.9375rem;
  font-weight: 300;
  line-height: 1.25rem;
  letter-spacing: 0.03em;
`;

export const small = css`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
  letter-spacing: 0;
`;

const bold = css`
  font-size: 0.9375rem;
  font-weight: 700;
  line-height: 1.25rem;
  letter-spacing: 0.3em;
`;

const typography = { normal, small, bold };

export default typography;
