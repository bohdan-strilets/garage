import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { pendulum } from "src/styles/animations/PendulumAnimation";

export const Item = styled.li`
  width: 330px;
  border-bottom: 1px solid var(--light-gray-color);
  cursor: pointer;

  :last-child {
    border-bottom: none;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  outline: none;

  width: 100%;
  height: 100%;
  padding: 10px;

  transition: background-color var(--hover-effect), color var(--hover-effect);

  :hover,
  :focus {
    background-color: var(--light-gray-color);
    color: var(--black-color);
  }

  :hover .icon-wrapper,
  :focus .icon-wrapper {
    color: var(--accent-color);
  }

  :active .icon-wrapper {
    animation: ${pendulum} 250ms linear 1;
  }
`;

export const IconWrapper = styled.div`
  transition: color var(--hover-effect);
`;

export const Label = styled.span`
  margin-left: 15px;
`;
