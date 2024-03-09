import { FaRoad, FaRankingStar } from "react-icons/fa6";
import { PiEngineFill } from "react-icons/pi";
import { IoCarSport } from "react-icons/io5";
import { ImPriceTag } from "react-icons/im";
import { FaCalendarCheck } from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";
import Avatar from "../UI/Avatar";
import Title from "../UI/Title";
import {
  Wrapper,
  DataWrapper,
  Item,
  PropertyWrapper,
  PropertyLabel,
  PropertyValue,
} from "./CarInformation.styled";

const CarInformation: React.FC = () => {
  return (
    <Wrapper>
      <Avatar
        url="https://cdn.pixabay.com/photo/2021/09/13/10/13/peugeot-6620913_1280.jpg"
        alt="Peugeot 508 rxh"
        width="650px"
        height="340px"
        borderRadius="5px"
        borderWidth={5}
        boxShadow={true}
        margin="0 15px 0 0"
      />
      <DataWrapper>
        <Title type="h2" background="accent" margin="0 0 20px 0">
          Peugeot - White Queen ♕
        </Title>
        <ul>
          <Item>
            <PropertyWrapper>
              <FaRankingStar />
              <PropertyLabel>Model:</PropertyLabel>
            </PropertyWrapper>
            <PropertyValue>508 RXH</PropertyValue>
          </Item>
          <Item>
            <PropertyWrapper>
              <IoCarSport />
              <PropertyLabel>Body type:</PropertyLabel>
            </PropertyWrapper>
            <PropertyValue>Wahon</PropertyValue>
          </Item>
          <Item>
            <PropertyWrapper>
              <PiEngineFill />
              <PropertyLabel>Engine capacity:</PropertyLabel>
            </PropertyWrapper>
            <PropertyValue>2.0 Diesel Hybrid4 (200KM)</PropertyValue>
          </Item>
          <Item>
            <PropertyWrapper>
              <FaRoad />
              <PropertyLabel>Current mileage:</PropertyLabel>
            </PropertyWrapper>
            <PropertyValue>174 500KM</PropertyValue>
          </Item>
          <Item>
            <PropertyWrapper>
              <ImPriceTag />
              <PropertyLabel>Purchase price:</PropertyLabel>
            </PropertyWrapper>
            <PropertyValue>44 000PLN</PropertyValue>
          </Item>
          <Item>
            <PropertyWrapper>
              <FaCalendarCheck />
              <PropertyLabel>Production year:</PropertyLabel>
            </PropertyWrapper>
            <PropertyValue>2012</PropertyValue>
          </Item>
          <Item>
            <PropertyWrapper>
              <GiCarWheel />
              <PropertyLabel>Type of drive:</PropertyLabel>
            </PropertyWrapper>
            <PropertyValue>4x4</PropertyValue>
          </Item>
        </ul>
      </DataWrapper>
    </Wrapper>
  );
};

export default CarInformation;
