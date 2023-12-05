import { startingCash } from "@/settings/settings";
import { IXmasHackState } from "./state.types";
import * as carData from "../../data/ads.json";


export const initState: IXmasHackState = {
  helloWorld: false,
  timeInDays: 0,
  moneyAmount: startingCash,
  carData: carData.data.search.adverts.advertList.adverts,
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
  }
};
