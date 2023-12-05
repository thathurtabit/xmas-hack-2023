import { IXmasHackState } from "@/context/state/state.types";
import { IXmasHackContextAction } from "@/context/context/context.types";
import { EAction } from "@/context/actions/action.types";
import { CurrentCars } from "@/context/state/state.types";

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
    case EAction.INCREMENT_TIME_DAYS: {
      return {
        ...state,
        timeDays: state.timeDays + 1,
      };
    }
    case EAction.CARS_FOR_SALE: {
      return {
        ...state,
        carsForSale: payload as Array<CurrentCars>
      };
    }
    case EAction.CARS_BOUGHT: {
      return {
        ...state,
        carsBought: payload as Array<CurrentCars>
      };
    }
    default: {
      return state;
    }
  }
};
