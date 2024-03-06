import { keyframes } from "@emotion/react";

export const Pulse = keyframes`
  0% {
  transform: scale(1);
  opacity: 0;
  }
  50% {
  transform: scale(1.2);
  opacity: 1;
  }
  100% {
  transform: scale(1);
  opacity: 0;
  }
`;
