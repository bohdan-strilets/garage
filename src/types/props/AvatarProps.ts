export type AvatarProps = {
  url: string;
  alt: string;
  width: string;
  height: string;
  margin?: string;
  borderWidth?: number;
  borderRadius?: string;
  boxShadow?: boolean;
};

export type BackgroundImgProps = Pick<
  AvatarProps,
  | "url"
  | "width"
  | "height"
  | "margin"
  | "borderWidth"
  | "borderRadius"
  | "boxShadow"
>;
