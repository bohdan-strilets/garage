import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Pulse } from "src/styles/animations/PulseAnimation";

export const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MenuBtn = styled(motion.button)`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 28px;

  background-color: transparent;
  border: none;
  outline: none;

  cursor: pointer;
  transition: color var(--hover-effect);

  ::after {
    content: "";
    position: absolute;
    display: block;

    width: 30px;
    height: 30px;

    background-color: transparent;
    border: 3px solid var(--green-color);
    border-radius: 50%;

    animation: ${Pulse} 2s linear infinite;
  }

  :active {
    transform: scale(0.95);
  }

  :hover,
  :focus {
    color: var(--green-color);
  }
`;

export const Container = styled(motion.div)`
  display: flex;
  align-items: start;
  justify-content: space-between;

  width: 100%;
  padding: 15px;
  margin-top: 15px;

  color: var(--white-color);
  background: var(--black-gradient);
  border-radius: 5px;
  box-shadow: var(--main-shadow);
`;
