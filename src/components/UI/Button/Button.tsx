import { ButtonProps } from "src/types/props/ButtonProps";
import { StyleedBtn, Label, IconWrapper } from "./Button.styled";

const Button: React.FC<ButtonProps> = ({
  type,
  label,
  icon,
  onClick,
  disabled,
  width,
  height,
  margin,
  background,
  borderRadius,
  boxShadow,
  ariaHaspopup,
  ariaPressed,
}) => {
  return (
    <StyleedBtn
      type={type}
      onClick={onClick}
      disabled={disabled}
      width={width}
      height={height}
      margin={margin}
      background={background}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
      aria-label={label}
      aria-disabled={disabled}
      aria-haspopup={ariaHaspopup}
      aria-pressed={ariaPressed}
    >
      {icon && <IconWrapper label={label}>{icon}</IconWrapper>}
      {label && <Label>{label}</Label>}
    </StyleedBtn>
  );
};

export default Button;
