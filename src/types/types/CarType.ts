import { MileageType } from "./MileageType";
import { EngineType } from "./EngineType";
import { TransmissionEnum } from "../enums/TransmissionEnum";
import { DriveUnitEnum } from "../enums/DriveUnitEnum";
import { BodyType } from "./BodyType";
import { HistoryType } from "./HistoryType";
import { PhotoType } from "./PhotoType";

export type CarType = {
  _id: string;
  brandName: string;
  modelName: string;
  nickname: string;
  generation: string;
  version: string;
  productionYear: number;
  mileage: MileageType;
  engine: EngineType;
  vin: string;
  registrationNumber: string;
  transmission: TransmissionEnum;
  driveUnit: DriveUnitEnum;
  body: BodyType;
  history: HistoryType;
  photo: PhotoType;
  createdAt: Date;
  updatedAt: Date;
};
