import { useEffect, useState, useRef, useContext, useMemo } from "react";
import { motion } from "framer-motion";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import cn from "classnames";
import {
  XmasHackDispatchContext,
  XmasHackStateContext,
} from "@/context/context/context";
import { ammendMoneyAmount } from "@/context/actions/example/hello-world";
import { CarTypes } from "@/utils/hooks/useGenerateCards.hooks";
import { priceChangeIntervalMS } from "@/settings/settings";

enum ActionTypes {
  INCREASE = "increase",
  DECREASE = "decrease",
}

interface BasicCardTypes extends CarTypes {
  removeCarFromSelectedList: (val: number) => void;
  addSelectedCarsToList: (val: number) => void;
}

export const BasicCarCard = ({
  starting,
  max,
  min,
  id,
  removeCarFromSelectedList,
  addSelectedCarsToList,
}: BasicCardTypes) => {
  const [price, setPrice] = useState(starting);
  const [actionType, setactionType] = useState(
    Math.random() * 2 > 1 ? "increase" : "decrease",
  );
  const [selected, setSelected] = useState(false);
  const [canAfford, setCanAfford] = useState(true);

  const timeout = useRef<ReturnType<typeof setInterval> | null>(null);
  const dispatch = useContext(XmasHackDispatchContext);
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
          ? prevState + 1
          : prevState - 1;
      });
    }, priceChangeIntervalMS);

    return () => {
      clearInterval(timeout.current as ReturnType<typeof setInterval>);
    };
  }, [actionType, max, min]);

  const handleMoneyAmount = () => {
    if (!selected && price < moneyAmount) {
      addSelectedCarsToList(id);
      dispatch(ammendMoneyAmount(moneyAmount - price));
    }
    if (!selected && price > moneyAmount) {
      setCanAfford(false);
    }
    if (selected) {
      dispatch(ammendMoneyAmount(moneyAmount + price));
    }
  };

  const initialPosition = useMemo(() => Math.round(Math.random()) * 100, []);
  const finalPosition = useMemo(() => 100 - initialPosition, [initialPosition]);

  return (
    <motion.button
      className="absolute"
      initial={{ x: `${initialPosition}vw`, y: initialPosition ? 400 : 0 }}
      animate={{ x: `${finalPosition}vw` }}
      transition={{
        x: { duration: 5, ease: "linear" },
        ease: "linear",
      }}
      onClick={() => {
        handleMoneyAmount();
        setSelected((prevState) => {
          if (prevState) {
            removeCarFromSelectedList(id);
          }

          return price < moneyAmount;
        });
      }}
    >
      <div
        className={cn(`mt-8 h-72 w-52 rounded-md flex flex-col`, {
          "bg-yellow-600": selected,
          "bg-blue-400": !selected,
        })}
      >
        <div className="flex items-center justify-center">
          <div className="p-4 text-center text-white">
            Price:{" "}
            <span className="font-semibold">
              &pound;{price.toLocaleString()}
            </span>
          </div>
          {selected &&
            (actionType === ActionTypes.INCREASE ? (
              <GoArrowUp className="bg-green-500 rounded-full text-white" />
            ) : (
              <GoArrowDown className="bg-red-500 rounded-full text-white" />
            ))}
        </div>

        {!canAfford && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: -50 }}
            transition={{
              duration: 1.5,
              type: "spring",
              ease: "easeOut",
            }}
            onAnimationComplete={() => {
              setCanAfford(true);
            }}
          >
            <div className="w-4/5 py-8 mx-auto border-2 border-gray-500 rounded-md bg-teal-600 text-white font-bold">
              Not enough dollar
            </div>
          </motion.div>
        )}
      </div>
    </motion.button>
  );
};
