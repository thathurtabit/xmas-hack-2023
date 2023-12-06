export enum GameOverReason {
    Bankrupt = 'bankrupt',
    Time = 'time',
}

export interface GameOverProps {
    reason: GameOverReason;
}