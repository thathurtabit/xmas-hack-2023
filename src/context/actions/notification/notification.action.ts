import { IXmasHackContextAction } from "@/context/context/context.types";
import { EAction } from "../action.types"
import { INotificationState } from "@/context/state/state.types";

export const setAllNotificationData = (
  payload: INotificationState[],
): IXmasHackContextAction => ({
  type: EAction.SET_ALL_NOTIFICATION_DATA,
  payload,
});

export const setNewNotification = (
  payload: INotificationState,
): IXmasHackContextAction => ({
  type: EAction.SET_NEW_NOTIFICATION,
  payload,
});
