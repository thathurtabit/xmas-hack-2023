import { ButtonProps } from "@/components/atoms/button/button.types";
import { ReactElement, ReactNode } from "react";

export enum GameStatus {
  Paused = 'paused',
  InProgress = 'in-progress',
  Won = 'won',
  Bankrupt = 'bankrupt',
  TimeUp = 'time-up',
}

export interface IXmasHackState {
  gameStatus: GameStatus;
  hasUnderstoodIntro: boolean;
  timeInDays: number;
  moneyAmount: number
  modal: IModalState;
  notifications: INotificationState[];
}

export interface IModalFooterAction {
  onClick: () => void;
  loading?: boolean;
  text?: string;
  icon?: ReactElement;
  variant?: ButtonProps['variant'];
}

export interface IModalFooter {
  confirm?: IModalFooterAction
  cancel?: IModalFooterAction
}

export interface IModalState {
  isOpen: boolean;
  title: string;
  content: ReactNode;
  size: 'small' | 'medium' | 'large';
  footer: IModalFooter;
}

export interface INotificationState {
  type: 'buy' | 'sell' | 'info';
  title: string;
}