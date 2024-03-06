import styled from "@emotion/styled";
import { StyledBtnProps, IconWrapperProps } from "./props";

export const StyleedBtn = styled.button<StyledBtnProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ width }) => (width ? width : "")};
  height: ${({ height }) => (height ? height : "")};
  margin: ${({ margin }) => (margin ? margin : "")};

  background-color: ${({ background }) => {
    if (background === "gray") {
      return "var(--light-gray-color)";
    }
    if (background === "accent") {
      return "var(--accent-color)";
    }
  }};
  color: ${({ background }) => {
    if (background === "gray") {
      return "var(--black-color)";
    }
    if (background === "accent") {
      return "var(--white-color)";
    }
  }};
  border-radius: ${({ borderRadius }) => {
    if (borderRadius === "small") {
      return "5px";
    }
    if (borderRadius === "medium") {
      return "10px";
    }
    if (borderRadius === "high") {
      return "20px";
    }
  }};

  border: none;
  outline: none;
  box-shadow: ${({ boxShadow }) => (boxShadow ? "var(--main-shadow)" : "")},
    inset 0px 25px 0px rgba(255, 255, 255, 0.3);

  cursor: pointer;
  transition: background-color var(--hover-effect), color var(--hover-effect);

  :hover,
  :focus {
    background-color: ${({ background }) => {
      if (background === "gray") {
        return "var(--accent-color)";
      }
      if (background === "accent") {
        return "var(--light-gray-color)";
      }
    }};
    color: ${({ background }) => {
      if (background === "gray") {
        return "var(--white-color)";
      }
      if (background === "accent") {
        return "var(--black-color)";
      }
    }};
  }

  :active {
    transform: scale(0.99);
  }

  :disabled {
    pointer-events: none;
    filter: grayscale(0.7);
  }
`;

export const Label = styled.span`
  font-family: var(--second-font);
  font-size: 24px;
  line-height: 1;
  text-shadow: 0px 2px 3px rgba(2, 2, 3, 0.4);
`;

export const IconWrapper = styled.div<IconWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: ${({ label }) => (label ? "10px" : "")};
`;
