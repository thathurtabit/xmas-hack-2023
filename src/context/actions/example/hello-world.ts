import { IXmasHackContextAction } from "@/context/context/context.types";
import { EAction } from "../action.types"

export const setHelloWorld = (
  payload: boolean,
): IXmasHackContextAction => ({
  type: EAction.SET_HELLO_WORLD,
  payload,
});
