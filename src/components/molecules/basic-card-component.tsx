import { useState, useContext } from "react";
import { motion } from "framer-motion";

import { XmasHackDispatchContext } from "@/context/context/context";
import { ammendMoneyAmount } from "@/context/actions/example/hello-world";
import { CarTypes } from "@/utils/hooks/use-generate-cards.hooks";
import { setNewNotification } from "@/context/actions/notification/notification.action";
import { useCarCardTimer } from "@/utils/hooks/use-car-card-timer.hooks";
import { carSpeed } from "@/settings/settings";
import { IconError } from "../icons/error/error";
import { formatCurrency } from "@/utils/format-currency";

interface BasicCardTypes extends CarTypes {
  addSelectedCarsToSelectedListAndRemoveFromCarList: (
    val: number,
    price: number,
  ) => void;
  removeCarsFromCarsList: (val: number) => void;
}

export const BasicCarCard = ({
  starting,
  max,
  min,
  id,
  image,
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
      addSelectedCarsToSelectedListAndRemoveFromCarList(id, price);
      dispatch(ammendMoneyAmount(moneyAmount - price));
      dispatch(
        setNewNotification({
          title: `You bought a vehicle for £${formatCurrency(price)}`,
          type: "buy",
        }),
      );
    }
    if (price > moneyAmount) {
      setCanAfford(false);
    }
  };

  return (
    <motion.button
      className="absolute z-1 top-1/2 -translate-y-1/2 m-0"
      initial={{ x: `110vw`, y: `-50%` }}
      animate={{ x: `-25vw`, y: `-50%` }}
      exit={{ x: `-25vw`, y: `-50%` }}
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
      <div className={`mt-8 w-72 rounded-md flex flex-col`}>
        <img src={image} className="max-w-full" />
        <div className="flex items-center justify-center">
          <div className="py-1 px-8 -mt-6 text-center text-white text-2xl bg-teal-700 rounded-md">
            Price:{" "}
            <span className="font-semibold">
              &pound;{formatCurrency(price)}
            </span>
          </div>
        </div>

        {!canAfford && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: -50 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{
              duration: 1.5,
              type: "spring",
              ease: "easeOut",
            }}
            onAnimationComplete={() => {
              setCanAfford(true);
            }}
          >
            <div className="w-4/5 px-4 py-3 mx-auto absolute left-1/2 -translate-x-1/2 rounded-md bg-red-600 text-white font-bold text-lg flex items-center justify-center gap-2">
              <IconError /> <span>Not enough dollar</span>
            </div>
          </motion.div>
        )}
      </div>
    </motion.button>
  );
};
