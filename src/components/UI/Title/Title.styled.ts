import styled from "@emotion/styled";
import { HeaderProps } from "src/types/props/TitleProps";

export const Header = styled.p<HeaderProps>`
  margin: ${({ margin }) => (margin ? margin : "")};
  padding: 10px 15px;

  font-size: 24px;
  font-family: var(--second-font);
  line-height: 1;

  color: var(--white-color);
  text-shadow: 2px 2px 3px var(--black-transparent-color);
  background: ${({ background }) => {
    if (background === "accent") {
      return "var(--red-gradient)";
    }
    if (background === "black") {
      return "var(--black-gradient)";
    }
  }};
`;

export const H1 = styled(Header.withComponent("h1"))`
  font-size: 32px;
`;

export const H2 = styled(Header.withComponent("h2"))`
  font-size: 28px;
`;

export const H3 = styled(Header.withComponent("h3"))`
  font-size: 24px;
`;

export const H4 = styled(Header.withComponent("h4"))`
  padding: 10px 12px;
  font-size: 20px;
`;

export const H5 = styled(Header.withComponent("h5"))`
  padding: 8px 12px;
  font-size: 16px;
`;

export const H6 = styled(Header.withComponent("h6"))`
  padding: 6px 10px;
  font-size: 14px;
`;
