import { IXmasHackState } from "./state.types";

export const initState: IXmasHackState = {
  helloWorld: false,
  timeDays: 0,
  carsForSale: [{ name: "Car 1", starting: 55, max: 65, min: 42 }, { name: "Car 2", starting: 62, max: 69, min: 49 }, { name: "Car 3", starting: 23, max: 10, min: 45}],
  carsBought: []
};
