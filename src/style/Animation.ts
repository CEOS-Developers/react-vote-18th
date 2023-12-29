import { css, keyframes } from 'styled-components';

export const voteIconFade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const fadeInAnimation = css`
  animation: ${voteIconFade} 0.2s ease;
`;
