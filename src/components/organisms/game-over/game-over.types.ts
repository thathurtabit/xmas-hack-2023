import { GameStatus } from "@/context/state/state.types";

export interface GameOverProps {
    reason: GameStatus.Bankrupt | GameStatus.TimeUp
}