import { createContext, useReducer, useMemo, ReactElement, ReactNode, Dispatch } from "react";

import { initState } from "../state/init-state";
import {
  ContextReducer, IXmasHackContextAction,
} from "../context/context.types"
import { IXmasHackState } from "../state/state.types";
import { globalReducer } from "../reducer/global/global.reducer";

export const XmasHackDispatchContext =
  createContext<Dispatch<IXmasHackContextAction>>(() => null);
export const XmasHackStateContext = createContext<IXmasHackState>(initState);
XmasHackDispatchContext.displayName = "XmasHackDispatchContext";
XmasHackStateContext.displayName = "XmasHackStateContext";

export interface IAppProvider {
  children: ReactNode | ReactElement | ReactElement[] | ReactNode;
}

export const XmasHackProvider = ({
  children,
}: IAppProvider): JSX.Element => {
  const [state, dispatch] = useReducer<ContextReducer>(
    globalReducer,
    initState,
  );

  const memoizedDispatchContextValue: Dispatch<IXmasHackContextAction> =
    useMemo(() => dispatch, [dispatch]);
  const memoizedStateContextValue: IXmasHackState =
    useMemo(() => {
      return state;
    }, [state]);

  return (
    <XmasHackDispatchContext.Provider value={memoizedDispatchContextValue}>
      <XmasHackStateContext.Provider value={memoizedStateContextValue}>
        {children}
      </XmasHackStateContext.Provider>
    </XmasHackDispatchContext.Provider>
  );
};
