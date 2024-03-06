export type TitleProps = {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode | string;
  background: "accent" | "black";
  margin?: string;
};

export type HeaderProps = Pick<TitleProps, "background" | "margin">;
