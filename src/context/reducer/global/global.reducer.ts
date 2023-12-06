import { GameStatus, IModalState, INotificationState, IXmasHackState } from "@/context/state/state.types";
import { IXmasHackContextAction } from "@/context/context/context.types";
import { EAction } from "@/context/actions/action.types";
import { initState } from "@/context/state/init-state";

export const globalReducer = (
  state: IXmasHackState,
  { type, payload }: IXmasHackContextAction,
): IXmasHackState => {
  switch (type) {
    case EAction.SET_GAME_STATUS: {
      return {
        ...state,
        gameStatus: payload as GameStatus,
      };
    }
    case EAction.SET_HAS_UNDERSTOOD_INTRO: {
      return {
        ...state,
        hasUnderstoodIntro: payload as boolean,
      };
    }
    case EAction.SET_MODAL_DATA: {
      return {
        ...state,
        modal: payload as IModalState,
      };
    }
    case EAction.SET_CLOSE_MODAL: {
      return {
        ...state,
        modal: initState.modal,
      };
    }
    case EAction.SET_ALL_NOTIFICATION_DATA: {
      return {
        ...state,
        notifications: payload as INotificationState[],
      };
    }
    case EAction.SET_NEW_NOTIFICATION: {
      return {
        ...state,
        notifications: [...state.notifications, payload as INotificationState],
      };
    }
    case EAction.INCREMENT_TIME_DAYS: {
      return {
        ...state,
        timeInDays: state.timeInDays + 1,
      };
    }
    case EAction.SET_MONEY_AMOUNT: {
      return {
        ...state,
        moneyAmount: payload as number
      }
    }
    default: {
      return state;
    }
  }
};
