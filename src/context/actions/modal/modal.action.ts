import { IXmasHackContextAction } from "@/context/context/context.types";
import { EAction } from "../action.types"
import { IModalState } from "@/context/state/state.types";

export const setModalData = (
  payload: IModalState,
): IXmasHackContextAction => ({
  type: EAction.SET_MODAL_DATA,
  payload,
});

export const setModalClose = (
): IXmasHackContextAction => ({
  type: EAction.SET_CLOSE_MODAL,
});
