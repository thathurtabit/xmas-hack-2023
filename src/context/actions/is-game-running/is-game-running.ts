import { IXmasHackContextAction } from "@/context/context/context.types";
import { EAction } from "../action.types"

export const setIsGameRunning = (
  payload: boolean,
): IXmasHackContextAction => ({
  type: EAction.SET_IS_GAME_RUNNING,
  payload,
});
