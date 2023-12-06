import { useState, useContext, useMemo } from "react";
import { motion } from "framer-motion";

import cn from "classnames";
import { XmasHackDispatchContext } from "@/context/context/context";
import { ammendMoneyAmount } from "@/context/actions/example/hello-world";
import { CarTypes } from "@/utils/hooks/useGenerateCards.hooks";
import { setNewNotification } from "@/context/actions/notification/notification.action";
import { useCarCardTimer } from "@/utils/hooks/useCarCardTimer.hooks";
import { carSpeed } from "@/settings/settings";

interface BasicCardTypes extends CarTypes {
  addSelectedCarsToSelectedListAndRemoveFromCarList: (val: number) => void;
  removeCarsFromCarsList: (val: number) => void;
}

export const BasicCarCard = ({
  starting,
  max,
  min,
  id,
  addSelectedCarsToSelectedListAndRemoveFromCarList,
  removeCarsFromCarsList,
}: BasicCardTypes) => {
  const dispatch = useContext(XmasHackDispatchContext);

  const { price, moneyAmount } = useCarCardTimer({
    starting,
    max,
    min,
  });

  const [canAfford, setCanAfford] = useState(true);

  const handleMoneyAmount = () => {
    if (price < moneyAmount) {
      addSelectedCarsToSelectedListAndRemoveFromCarList(id);
      dispatch(ammendMoneyAmount(moneyAmount - price));
      dispatch(
        setNewNotification({
          title: `You bought a car for £${price.toLocaleString()}`,
          type: "buy",
        }),
      );
    }
    if (price > moneyAmount) {
      setCanAfford(false);
    }
  };

  const initialPosition = useMemo(() => Math.round(Math.random()) * 100, []);

  return (
    <motion.button
      className="absolute"
      initial={{ x: `110vw`, y: initialPosition ? 400 : 0 }}
      animate={{ x: `-25vw` }}
      transition={{
        x: { duration: carSpeed, ease: "linear" },
        ease: "linear",
      }}
      onClick={() => {
        handleMoneyAmount();
      }}
      onAnimationComplete={() => {
        removeCarsFromCarsList(id);
      }}
    >
      <div
        className={cn(`mt-8 h-72 w-52 rounded-md flex flex-col bg-blue-400`)}
      >
        <div className="flex items-center justify-center">
          <div className="p-4 text-center text-white">
            Price:{" "}
            <span className="font-semibold">
              &pound;{price.toLocaleString()}
            </span>
          </div>
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
