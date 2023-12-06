import { setNewNotification } from "@/context/actions/notification/notification.action";
import {
  XmasHackDispatchContext,
  XmasHackStateContext,
} from "@/context/context/context";
import {
  generateNewCardIntervalMS,
  priceChangeMultiplierLOWER,
  priceChangeMultiplierUPPER,
} from "@/settings/settings";
import { useContext, useEffect, useState } from "react";
import { selectCarImage } from "../select-car-image";

export interface CarTypes {
  id: number;
  starting: number;
  price: number;
  max: number;
  min: number;
  image: string;
}

export const useGenerateCards = () => {
  const [cars, setCars] = useState<CarTypes[]>([]);
  const [selectedCars, setSelectedCars] = useState<CarTypes[]>([]);
  const { moneyAmount } = useContext(XmasHackStateContext);
  const dispatch = useContext(XmasHackDispatchContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setCars((prevCars) => {
        if (prevCars.length <= 4) {
          const starting =
            Math.floor(Math.random() * (moneyAmount * 0.6)) + moneyAmount * 0.6;

          return prevCars.concat({
            // TODO: use better key than random number
            id: Math.floor(Math.random() * 100) * (starting * 1.1),
            starting,
            price: starting,
            image: selectCarImage(starting),
            max: Math.floor(starting * priceChangeMultiplierUPPER),
            min: Math.floor(starting * priceChangeMultiplierLOWER),
          });
        }
        return prevCars;
      });
    }, generateNewCardIntervalMS);
    return () => clearInterval(interval);
  }, [moneyAmount, cars]);

  const getCarPrice = (key: number) =>
    selectedCars.find((car) => car.id === key)?.price;

  const removeCarFromSelectedList = (key: number) => {
    const soldCarPrice = getCarPrice(key);
    const newCars = selectedCars.filter((car) => car.id !== key);
    if (soldCarPrice) {
      dispatch(
        setNewNotification({
          title: `You sold a car for £${soldCarPrice?.toLocaleString()}`,
          type: "sell",
        }),
      );
    }
    setSelectedCars(newCars);
  };

  const removeCarsFromCarsList = (key: number) => {
    const newCars = cars.filter((car) => car.id !== key);
    setCars(newCars);
  };

  const addSelectedCarsToSelectedListAndRemoveFromCarList = (key: number) => {
    const boughtCarPrice = getCarPrice(key);
    const chosenCars = cars.find((car) => car.id === key);
    setSelectedCars((prevState) => prevState.concat(chosenCars as CarTypes));
    if (boughtCarPrice) {
      dispatch(
        setNewNotification({
          title: `You bought a car for £${boughtCarPrice?.toLocaleString()}`,
          type: "buy",
        }),
      );
    }
    removeCarsFromCarsList(key);
  };

  return {
    removeCarFromSelectedList,
    cars,
    addSelectedCarsToSelectedListAndRemoveFromCarList,
    selectedCars,
    removeCarsFromCarsList,
  };
};
