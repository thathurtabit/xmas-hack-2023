import { IXmasHackState } from "../state/state.types";

// Reducer
export type ContextReducer = (
  state: IXmasHackState,
  action: IXmasHackContextAction,
) => IXmasHackState
// =========================

// Actions
export interface IXmasHackContextAction {
  type: string;
  payload?: unknown;
}



