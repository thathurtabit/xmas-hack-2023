import { useEffect, useState, useRef } from "react";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import cn from "classnames";
import { useContext } from "react";
import { XmasHackStateContext, XmasHackDispatchContext } from "@/context/context/context";
import { setCarsForSale, setCarsBought } from "@/context/actions/example/hello-world";

enum ActionTypes {
  INCREASE = "increase",
  DECREASE = "decrease",
}

interface CarTypes {
  name: string;
  starting: number;
  max: number;
  min: number;
}

export const Car = ({
  name,
  starting,
  max,
  min,
}: CarTypes
) => {
  const [price, setPrice] = useState(starting);
  const [actionType, setactionType] = useState("increase");
  const timeout = useRef<ReturnType<typeof setInterval> | null>(null);
  const { carsForSale, carsBought } = useContext(XmasHackStateContext);
  const dispatch = useContext(XmasHackDispatchContext);

  const removeCarFromRoadAndAddToBought = (name: string) => {
    const arrayWithRemoved = carsForSale.filter((car) => car.name !== name);
    const filterByBought = carsForSale.filter((car) => car.name === name);

    dispatch(setCarsForSale(arrayWithRemoved));
    dispatch(setCarsBought([...carsBought, filterByBought[0]]));
  }

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
    }, 500);

    return () => {
      clearInterval(timeout.current as ReturnType<typeof setInterval>);
    };
  }, [actionType, max, min]);

  return (
    <button
      onClick={() => {
        console.log(price);
        removeCarFromRoadAndAddToBought(name);      
      }}
    >
      <div
        className={cn(`mt-8 h-72 w-52 rounded-md flex flex-col`)}
      >
        <div className="flex items-center justify-center">
          <div className="p-4 text-center">Price: {price}</div>
          {actionType === ActionTypes.INCREASE ? (
            <GoArrowUp className="bg-green-500 rounded-full text-white" />
          ) : (
            <GoArrowDown className="bg-red-500 rounded-full text-white" />
          )}
        </div>
      </div>
    </button>
  );
};
