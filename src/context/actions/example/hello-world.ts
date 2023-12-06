import { IXmasHackContextAction } from "@/context/context/context.types";
import { EAction } from "../action.types";

export const incrementTimeInDays = (
): IXmasHackContextAction => ({
  type: EAction.INCREMENT_TIME_DAYS,
});

export const ammendMoneyAmount = (payload: number): IXmasHackContextAction => ({
  type: EAction.SET_MONEY_AMOUNT,
  payload,
});
