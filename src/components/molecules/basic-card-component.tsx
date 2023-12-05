import { useEffect, useState, useRef, useContext } from "react";
import { motion } from "framer-motion";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import cn from "classnames";
import {
  XmasHackDispatchContext,
  XmasHackStateContext,
} from "@/context/context/context";
import { ammendMoneyAmount } from "@/context/actions/example/hello-world";
import { CarTypes } from "@/utils/hooks/useGenerateCards.hooks";

enum ActionTypes {
  INCREASE = "increase",
  DECREASE = "decrease",
}

interface BasicCardTypes extends CarTypes {
  removeCarFromList: (val: number) => void;
}

export const BasicCarCard = ({
  starting,
  max,
  min,
  id,
  removeCarFromList,
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

        setCanAfford(true);

        return actionType === ActionTypes.INCREASE
          ? prevState + 1
          : prevState - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timeout.current as ReturnType<typeof setInterval>);
    };
  }, [actionType, max, min]);

  const handleMoneyAmount = () => {
    if (!selected && price < moneyAmount) {
      dispatch(ammendMoneyAmount(moneyAmount - price));
    }
    if (!selected && price > moneyAmount) {
      setCanAfford(false);
    }
    if (selected) {
      dispatch(ammendMoneyAmount(moneyAmount + price));
    }
  };

  return (
    <button
      onClick={() => {
        handleMoneyAmount();
        setSelected((prevState) => {
          if (prevState && price < moneyAmount) {
            removeCarFromList(id);
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
          <div className="p-4 text-center">Price: {price}</div>
          {selected &&
            (actionType === ActionTypes.INCREASE ? (
              <GoArrowUp className="bg-green-500 rounded-full text-white" />
            ) : (
              <GoArrowDown className="bg-red-500 rounded-full text-white" />
            ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: !canAfford ? 1 : 0, y: !canAfford ? -100 : 100 }}
        >
          <div className="w-4/5 py-8 mx-auto border-2 border-gray-500 rounded-md bg-teal-600 text-white font-bold">
            Not enough dollar
          </div>
        </motion.div>
      </div>
    </button>
  );
};
