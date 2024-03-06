export type ButtonProps = {
  type: "button" | "submit" | "reset" | undefined;
  label?: string;
  icon?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  width?: string;
  height?: string;
  margin?: string;
  background?: "accent" | "gray";
  borderRadius?: "small" | "medium" | "high";
  boxShadow?: boolean;
  ariaHaspopup?: boolean;
  ariaPressed?: boolean;
};

export type StyledBtnProps = Pick<
  ButtonProps,
  "width" | "height" | "margin" | "background" | "borderRadius" | "boxShadow"
>;

export type IconWrapperProps = Pick<ButtonProps, "label">;
