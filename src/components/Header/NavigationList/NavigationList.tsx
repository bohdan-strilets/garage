import Title from "src/components/UI/Title";
import { NavigationListProps } from "./props";
import { Item, StyledLink, IconWrapper, Label } from "./NavigationList.styled";

const NavigationList: React.FC<NavigationListProps> = ({ title, options }) => {
  return (
    <div>
      <Title type="h2" background="accent" margin="0 0 15px 0">
        {title}
      </Title>
      <ul>
        {options.map((item) => (
          <Item key={item.id}>
            <StyledLink to={item.path}>
              <IconWrapper className="icon-wrapper">{item.icon}</IconWrapper>
              <Label>{item.label}</Label>
            </StyledLink>
          </Item>
        ))}
      </ul>
    </div>
  );
};

export default NavigationList;
