import { keyframes } from "@emotion/react";

export const flicker = keyframes`
  0% {
  opacity: 1;
  }
  25% {
  opacity: 0.2;
  }
  50% {
  opacity: 1;
  }
  75% {
  opacity: 0.5;
  }
  100% {
  opacity: 1;
  }
`;
