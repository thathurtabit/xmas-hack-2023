import { IXmasHackContextAction } from "@/context/context/context.types";
import { EAction } from "../action.types";

export const setHelloWorld = (payload: boolean): IXmasHackContextAction => ({
  type: EAction.SET_HELLO_WORLD,
  payload,
});

export const incrementTimeDays = (): IXmasHackContextAction => ({
  type: EAction.INCREMENT_TIME_DAYS,
});

export const ammendMoneyAmount = (payload: number): IXmasHackContextAction => ({
  type: EAction.SET_MONEY_AMOUNT,
  payload,
});
