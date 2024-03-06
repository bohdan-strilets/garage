import { keyframes } from "@emotion/react";

export const RightWingAnimation = keyframes`
  0% {
  transform: rotate(80deg);
  opacity: 0;
  }
  100% {
  transform: rotate(0);
  opacity: 1;
  }
`;

export const LeftWingAnimation = keyframes`
  0% {
  transform: scaleX(-1) rotate(80deg);
  opacity: 0;
  }
  100% {
  transform: scaleX(-1) rotate(0);
  opacity: 1;
  }
`;
