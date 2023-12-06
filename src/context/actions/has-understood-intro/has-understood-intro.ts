import { IXmasHackContextAction } from "@/context/context/context.types";
import { EAction } from "../action.types"

export const setHasUnderstoodIntro = (
  payload: boolean,
): IXmasHackContextAction => ({
  type: EAction.SET_HAS_UNDERSTOOD_INTRO,
  payload,
});
