import { IconGoForward } from "@/components/icons/go-forward/go-forward";
import { IconPlay } from "@/components/icons/play/play";
import { setHasUnderstoodIntro } from "@/context/actions/has-understood-intro/has-understood-intro";
import {
  setModalClose,
  setModalData,
} from "@/context/actions/modal/modal.action";
import {
  XmasHackDispatchContext,
  XmasHackStateContext,
} from "@/context/context/context";
import { IModalState } from "@/context/state/state.types";
import { goalCash, numberOfDaysUntilGameOver } from "@/settings/settings";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";

export const useIntroModal = () => {
  const [introIndex, setIntroIndex] = useState(0);
  const { hasUnderstoodIntro } = useContext(XmasHackStateContext);
  const dispatch = useContext(XmasHackDispatchContext);

  const currentIntroPanelData = useMemo(() => {
    const introModalData: IModalState[] = [
      {
        title: "Welcome to Road to Riches",
        content: <img src="/images/logo.png" className="w-[280px] m-auto" />,
        isOpen: true,
        size: "small",
        footer: {
          confirm: {
            text: "Next",
            icon: <IconGoForward />,
            onClick: () => setIntroIndex(introIndex + 1),
          },
          cancel: {
            text: "I'm ready!",
            icon: <IconPlay />,
            onClick: () => dispatch(setHasUnderstoodIntro(true)),
          },
        },
      },
      {
        title: "Getting started",
        content: (
          <p>
            The aim is to buy cars for a <strong>low</strong> price, and{" "}
            <strong>sell</strong> for high!
          </p>
        ),
        isOpen: true,
        size: "small",
        footer: {
          confirm: {
            text: "Next",
            icon: <IconGoForward />,
            onClick: () => setIntroIndex(introIndex + 1),
          },
          cancel: {
            text: "I'm ready!",
            icon: <IconPlay />,
            onClick: () => dispatch(setHasUnderstoodIntro(true)),
          },
        },
      },
      {
        title: "Price fluctuation",
        content: (
          <p>
            The <strong>prices will fluctuate</strong> up and down; it's up to
            you to make sure you get the best price possible!
          </p>
        ),
        isOpen: true,
        size: "small",
        footer: {
          confirm: {
            text: "Next",
            icon: <IconGoForward />,
            onClick: () => setIntroIndex(introIndex + 1),
          },
          cancel: {
            text: "I'm ready!",
            icon: <IconPlay />,
            onClick: () => dispatch(setHasUnderstoodIntro(true)),
          },
        },
      },
      {
        title: "Be rich and be quick!",
        content: (
          <p>
            If you reach the grand total of <strong>£{goalCash / 1000}k</strong>{" "}
            - you win! But be quick, you've only got{" "}
            <strong>{Math.floor(numberOfDaysUntilGameOver / 360)} years</strong>{" "}
            to do it!
          </p>
        ),
        isOpen: true,
        size: "small",
        footer: {
          confirm: {
            text: "I'm ready!",
            icon: <IconPlay />,
            onClick: () => {
              setIntroIndex(0);
              dispatch(setHasUnderstoodIntro(true));
            },
          },
        },
      },
    ];

    return introModalData[introIndex];
  }, [introIndex, dispatch]);

  const dispatchModalDataCallback = useCallback(() => {
    dispatch(setModalData(currentIntroPanelData));
  }, [dispatch, currentIntroPanelData]);

  useEffect(() => {
    if (hasUnderstoodIntro) {
      dispatch(setModalClose());
      return;
    }
    dispatchModalDataCallback();
  }, [dispatchModalDataCallback, hasUnderstoodIntro, dispatch]);
};
