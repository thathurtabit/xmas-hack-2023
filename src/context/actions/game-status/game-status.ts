import { IXmasHackContextAction } from "@/context/context/context.types";
import { EAction } from "../action.types"
import { GameStatus } from "@/context/state/state.types";

export const setGameStatus = (
    payload: GameStatus,
): IXmasHackContextAction => ({
    type: EAction.SET_GAME_STATUS,
    payload,
});
