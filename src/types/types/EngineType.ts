import { FuelEnum } from "../enums/FuelEnum";

export type EngineType = {
  engineCapacity: number;
  enginePower: number;
  fuelType: FuelEnum;
  fuelConsumption: {
    city: number;
    highway: number;
    mixed: number;
  };
};
