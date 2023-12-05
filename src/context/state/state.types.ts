export interface IXmasHackState {
  helloWorld: boolean;
  timeDays: number;
  carsForSale: Array<CurrentCars>;
  carsBought: Array<CurrentCars>;
}

export interface CurrentCars {
  name: string;
  starting: number;
  max: number;
  min: number;
}