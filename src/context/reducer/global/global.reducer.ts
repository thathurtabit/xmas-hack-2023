import { IXmasHackState } from "@/context/state/state.types";
import { IXmasHackContextAction } from "@/context/context/context.types";
import { EAction } from "@/context/actions/action.types";

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
    default: {
      return state;
    }
  }
};
