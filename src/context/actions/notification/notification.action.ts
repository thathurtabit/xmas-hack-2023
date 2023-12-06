import { IXmasHackContextAction } from "@/context/context/context.types";
import { EAction } from "../action.types"
import { INotificationState } from "@/context/state/state.types";

export const setNotificationData = (
  payload: INotificationState[],
): IXmasHackContextAction => ({
  type: EAction.SET_NOTIFICATION_DATA,
  payload,
});
