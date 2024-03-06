import styled from "@emotion/styled";
import { BackgroundImgProps } from "src/types/props/AvatarProps";

export const BackgroundImg = styled.div<BackgroundImgProps>`
  width: ${({ width }) => (width ? width : "")};
  height: ${({ height }) => (height ? height : "")};
  margin: ${({ margin }) => (margin ? margin : "")};

  background-image: ${({ url }) => (url ? `url(${url})` : "")};
  background-color: var(--light-gray-color);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "")};
  box-shadow: ${({ boxShadow }) => (boxShadow ? "var(--main-shadow)" : "")};
  border: ${({ borderWidth }) =>
    borderWidth ? `${borderWidth}px solid var(--white-color)` : ""};
`;
