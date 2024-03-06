import Avatar from "src/components/UI/Avatar";
import Title from "src/components/UI/Title";
import { UserBarProps } from "src/types/props/UserBarProps";
import { Wrapper, Item, Text, CarName } from "./UserBar.styled";

const UserBar: React.FC<UserBarProps> = ({
  avatarUrl,
  userName,
  carBrand,
  carModel,
  carName,
  carMileage,
  insurance,
  technicalInspection,
}) => {
  return (
    <Wrapper>
      <Avatar
        url={avatarUrl}
        alt={`User avatar by ${userName}`}
        width="120px"
        height="120px"
        borderWidth={3}
        borderRadius="5px"
        boxShadow={true}
        margin="0 0 20px 0"
      />
      <Title type="h3" background="accent" margin="0 0 15px 0">
        {userName}
      </Title>
      <ul>
        <Item>
          <Text>
            {carBrand} {carModel} - <CarName>{carName}</CarName>
          </Text>
        </Item>
        <Item>
          <Text>Car mileage: {carMileage}km</Text>
        </Item>
        <Item>
          <Text>Insurance up to: {insurance.toLocaleDateString()}</Text>
        </Item>
        <Item>
          <Text>
            Technical inspection up to:{" "}
            {technicalInspection.toLocaleDateString()}
          </Text>
        </Item>
      </ul>
    </Wrapper>
  );
};

export default UserBar;
