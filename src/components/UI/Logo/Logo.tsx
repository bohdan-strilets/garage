import { PiGarage } from "react-icons/pi";
import { PathsRoute } from "src/types/enums/PathsRoute";
import { LogoProps } from "./props";
import {
  StyledLink,
  IconWrapper,
  BrandName,
  Tagline,
  LeftWing,
  RightWing,
} from "./Logo.styled";

const Logo: React.FC<LogoProps> = ({ type }) => {
  return (
    <StyledLink to={PathsRoute.Home}>
      <IconWrapper>
        <PiGarage size={140} />
        <BrandName>Garage</BrandName>
        <LeftWing size={120} className="wing" />
        <RightWing size={120} className="wing" />
      </IconWrapper>
      {type !== "short" && <Tagline>Your Car Expenses Ally</Tagline>}
    </StyledLink>
  );
};

export default Logo;
