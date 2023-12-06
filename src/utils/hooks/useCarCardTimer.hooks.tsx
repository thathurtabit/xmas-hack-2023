import { XmasHackStateContext } from "@/context/context/context";
import { priceChangeIntervalMS } from "@/settings/settings";
import { useContext, useEffect, useRef, useState } from "react";

export enum ActionTypes {
  INCREASE = "increase",
  DECREASE = "decrease",
}

export const useCarCardTimer = ({
  starting,
  max,
  min,
}: {
  starting: number;
  max: number;
  min: number;
}) => {
  const [price, setPrice] = useState(starting);
  const [actionType, setactionType] = useState(
    Math.random() * 2 > 1 ? "increase" : "decrease",
  );

  const timeout = useRef<ReturnType<typeof setInterval> | null>(null);
  const { moneyAmount } = useContext(XmasHackStateContext);

  useEffect(() => {
    timeout.current = setInterval(() => {
      setPrice((prevState) => {
        if (prevState === max && actionType === ActionTypes.INCREASE) {
          setactionType(ActionTypes.DECREASE);
        }
        if (prevState === min && actionType === ActionTypes.DECREASE) {
          setactionType(ActionTypes.INCREASE);
        }

        return actionType === ActionTypes.INCREASE
          ? prevState + 182
          : prevState - 105;
      });
    }, priceChangeIntervalMS);

    return () => {
      clearInterval(timeout.current as ReturnType<typeof setInterval>);
    };
  }, [actionType, max, min]);

  return { price, moneyAmount, actionType };
};
