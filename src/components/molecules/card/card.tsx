import { useEffect, useState, useRef, useContext } from "react";
import { CarTypes } from "../../../context/state/state.types"
import { XmasHackStateContext, XmasHackDispatchContext } from "@/context/context/context";
import { setCarData, amendMoneyAmount } from "@/context/actions/example/hello-world";
import { priceChangeIntervalMS } from "@/settings/settings";
import { motion } from "framer-motion";
import { GoArrowDown, GoArrowUp } from "react-icons/go";

enum ActionTypes {
  INCREASE = "increase",
  DECREASE = "decrease",
}

export const Card = ({
  id,
  image,
  onMarket,
  starting,
  max,
  min
}: CarTypes) => {

  const dispatch = useContext(XmasHackDispatchContext);
  const { carData, moneyAmount } = useContext(XmasHackStateContext);
  const [price, setPrice] = useState(starting);
  const [actionType, setActionType] = useState(
    Math.random() * 2 > 1 ? "increase" : "decrease",
  );
  const [canAfford, setCanAfford] = useState(true);

  const timeout = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timeout.current = setInterval(() => {
      setPrice((prevState) => {
        if (prevState === max && actionType === ActionTypes.INCREASE) {
          setActionType(ActionTypes.DECREASE);
        }
        if (prevState === min && actionType === ActionTypes.DECREASE) {
          setActionType(ActionTypes.INCREASE);
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
    if (onMarket && price < moneyAmount) {
      dispatch(amendMoneyAmount(moneyAmount - price));
    }
    if (onMarket && price > moneyAmount) {
      setCanAfford(false);
    }
    if (!onMarket) {
      dispatch(amendMoneyAmount(moneyAmount + price));
    }
  };

  const handleSettingOnMarket = (currentMarketStatus: boolean) => {
    const setCurrentMarketStatus = onMarket ? (price < moneyAmount ? !currentMarketStatus : currentMarketStatus) : !currentMarketStatus;
    const updatedCarData = carData.map((car) => car.id === id ? { ...car, onMarket: setCurrentMarketStatus } : car )
    dispatch(setCarData((updatedCarData)));
  }

  return (
    <div
      className="min-w-300 max-w-300"            
    >
      <img 
          src={image} 
          onClick={() => {
            handleMoneyAmount();
            handleSettingOnMarket((onMarket));
          }} 
        />
        <div className="flex items-center justify-center">
          <div className="p-4 text-center text-white">
            Price:{" "}
            <span className="font-semibold">
              &pound;{price.toLocaleString()}
            </span>
          </div>
          {!onMarket &&
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
  );
};
