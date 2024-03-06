import { AvatarProps } from "src/types/props/AvatarProps";
import { BackgroundImg } from "./Avatar.styled";

const Avatar: React.FC<AvatarProps> = ({
  url,
  alt,
  width,
  height,
  margin,
  borderWidth,
  borderRadius,
  boxShadow,
}) => {
  return (
    <BackgroundImg
      url={url}
      width={width}
      height={height}
      margin={margin}
      borderWidth={borderWidth}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
      aria-label={alt}
      role="img"
    />
  );
};

export default Avatar;
