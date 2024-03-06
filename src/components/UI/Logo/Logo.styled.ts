import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { GiLibertyWing } from "react-icons/gi";
import {
  RightWingAnimation,
  LeftWingAnimation,
} from "src/styles/animations/WingsAnimation";

export const StyledLink = styled(Link)`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  outline: none;

  :hover .wing,
  :focus .wing {
    color: var(--accent-color);
  }
`;

export const IconWrapper = styled.div`
  position: relative;
`;

export const BrandName = styled.p`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  font-family: var(--second-font);
  font-size: 26px;
  line-height: 1;
  text-transform: lowercase;

  color: var(--accent-color);
`;

export const Tagline = styled.p`
  position: relative;
  top: -20px;

  line-height: 1;
  font-weight: 700;
  text-transform: lowercase;

  padding: 5px 35px;

  background: var(--red-gradient);
  color: var(--white-color);
  border-radius: 10px;
  box-shadow: var(--main-shadow);

  ::first-letter {
    text-transform: uppercase;
  }
`;

export const LeftWing = styled(GiLibertyWing)`
  position: absolute;
  top: 0;
  left: 5%;

  transform: scaleX(-1);
  transform-origin: bottom left;
  animation: ${LeftWingAnimation} 500ms ease-out 1;
  transition: color var(--hover-effect);
`;

export const RightWing = styled(GiLibertyWing)`
  position: absolute;
  top: 0;
  left: 95%;

  transform-origin: bottom left;
  animation: ${RightWingAnimation} 500ms ease-out 1;
  transition: color var(--hover-effect);
`;
