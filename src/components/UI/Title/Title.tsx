import { TitleProps } from "./props";
import { H1, H2, H3, H4, H5, H6 } from "./Title.styled";

const Title: React.FC<TitleProps> = ({
  type,
  children,
  background,
  margin,
}) => {
  if (type === "h1") {
    return (
      <H1 background={background} margin={margin}>
        {children}
      </H1>
    );
  }
  if (type === "h2") {
    return (
      <H2 background={background} margin={margin}>
        {children}
      </H2>
    );
  }
  if (type === "h3") {
    return (
      <H3 background={background} margin={margin}>
        {children}
      </H3>
    );
  }
  if (type === "h4") {
    return (
      <H4 background={background} margin={margin}>
        {children}
      </H4>
    );
  }
  if (type === "h5") {
    return (
      <H5 background={background} margin={margin}>
        {children}
      </H5>
    );
  }
  if (type === "h6") {
    return (
      <H6 background={background} margin={margin}>
        {children}
      </H6>
    );
  }
};

export default Title;
