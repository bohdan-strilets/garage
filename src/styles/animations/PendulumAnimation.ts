import { keyframes } from "@emotion/react";

export const pendulum = keyframes`
  0% {
  transform: translateX(0);
  }
  25% {
  transform: translateX(1px);
  }
  50% {
  transform: translateX(0);
  }
  100% {
  transform: translateX(-1px);
  }
`;
