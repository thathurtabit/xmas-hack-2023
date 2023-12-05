import { XmasHackStateContext } from "@/context/context/context";
import {
  generateNewCardIntervalMS,
  priceChangeMultiplierLOWER,
  priceChangeMultiplierUPPER,
} from "@/settings/settings";
import { useContext, useEffect, useState } from "react";

export interface CarTypes {
  id: number;
  starting: number;
  max: number;
  min: number;
}

export const useGenerateCards = () => {
  const [cars, setCars] = useState<CarTypes[]>([]);
  const [selectedCars, setSelectedCars] = useState<CarTypes[]>([]);

  const { moneyAmount } = useContext(XmasHackStateContext);

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
            max: Math.floor(starting * priceChangeMultiplierUPPER),
            min: Math.floor(starting * priceChangeMultiplierLOWER),
          });
        }
        return prevCars;
      });
    }, generateNewCardIntervalMS);
    return () => clearInterval(interval);
  }, [moneyAmount, cars]);

  const removeCarFromSelectedList = (key: number) => {
    const newCars = selectedCars.filter((car) => car.id !== key);
    setSelectedCars(newCars);
  };

  const removeCarsFromCarsList = (key: number) => {
    const newCars = cars.filter((car) => car.id !== key);
    setCars(newCars);
  };

  const addSelectedCarsToSelectedListAndRemoveFromCarList = (key: number) => {
    const newCars = cars.filter((car) => car.id !== key);
    const chosenCars = cars.find((car) => car.id === key);
    setSelectedCars((prevState) => prevState.concat(chosenCars as CarTypes));
    setCars(newCars);
  };

  return {
    removeCarFromSelectedList,
    cars,
    addSelectedCarsToSelectedListAndRemoveFromCarList,
    selectedCars,
    removeCarsFromCarsList,
  };
};
