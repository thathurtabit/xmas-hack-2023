import { IModalState, IXmasHackState } from "@/context/state/state.types";
import { IXmasHackContextAction } from "@/context/context/context.types";
import { EAction } from "@/context/actions/action.types";
import { initState } from "@/context/state/init-state";

export const globalReducer = (
  state: IXmasHackState,
  { type, payload }: IXmasHackContextAction,
): IXmasHackState => {
  switch (type) {
    case EAction.SET_HELLO_WORLD: {
      return {
        ...state,
        helloWorld: payload as boolean,
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
