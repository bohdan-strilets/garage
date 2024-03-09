import { BodyTypeEnum } from "../enums/BodyTypeEnum";
import { ColorEnum } from "../enums/ColorEnum";
import { ColorTypeEnum } from "../enums/ColorTypeEnum";

export type BodyType = {
  bodyType: BodyTypeEnum;
  numberDoors: number;
  numberSeats: number;
  color: ColorEnum;
  colorType: ColorTypeEnum;
};
