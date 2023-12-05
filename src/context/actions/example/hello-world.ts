import { IXmasHackContextAction } from "@/context/context/context.types";
import { EAction } from "../action.types";
import { CarTypes } from "@/context/state/state.types";

export const setHelloWorld = (payload: boolean): IXmasHackContextAction => ({
  type: EAction.SET_HELLO_WORLD,
  payload,
});

export const incrementTimeInDays = (
): IXmasHackContextAction => ({
  type: EAction.INCREMENT_TIME_DAYS,
});

export const amendMoneyAmount = (payload: number): IXmasHackContextAction => ({
  type: EAction.SET_MONEY_AMOUNT,
  payload,
});

export const setCarData = (payload: CarTypes[]): IXmasHackContextAction => ({
  type: EAction.SET_CAR_DATA,
  payload,
});
