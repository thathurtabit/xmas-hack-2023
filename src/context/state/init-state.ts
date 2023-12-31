import { startingCash } from "@/settings/settings";
import { GameStatus, IXmasHackState } from "./state.types";

export const initState: IXmasHackState = {
  gameStatus: GameStatus.Paused,
  hasUnderstoodIntro: false,
  timeInDays: 0,
  moneyAmount: startingCash,
  modal: {
    isOpen: false,
    title: '',
    content: null,
    size: 'small',
    footer: {
      confirm: {
        onClick: () => { },
        loading: false,
        text: 'Confirm',
        variant: 'primary',
      },
      cancel: {
        onClick: () => { },
        loading: false,
        text: 'Cancel',
        variant: 'secondary',
      },
    },
  },
  notifications: [],
};
