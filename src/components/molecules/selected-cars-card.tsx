import { useContext } from "react";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import { XmasHackDispatchContext } from "@/context/context/context";
import { ammendMoneyAmount } from "@/context/actions/example/hello-world";
import { CarTypes } from "@/utils/hooks/useGenerateCards.hooks";
import {
  ActionTypes,
  useCarCardTimer,
} from "@/utils/hooks/useCarCardTimer.hooks";

interface BasicCardTypes extends CarTypes {
  removeCarFromSelectedList: (val: number, price: number) => void;
}

export const SelectedCarCard = ({
  image,
  max,
  min,
  id,
  price: selectedPrice,
  removeCarFromSelectedList,
}: BasicCardTypes) => {
  const dispatch = useContext(XmasHackDispatchContext);

  const { price, moneyAmount, actionType } = useCarCardTimer({
    starting: selectedPrice,
    max,
    min,
  });

  return (
    <button
      onClick={() => {
        dispatch(ammendMoneyAmount(moneyAmount + price));
        removeCarFromSelectedList(id, price);
      }}
    >
      <div className="flex flex-col w-64 bg-yellow-500 rounded-lg">
        <img src={image} className="max-w-full" />
        <div className="flex items-center justify-center  -mt-8 text-xl">
          <div className="p-4 text-center text-white">
            Price:{" "}
            <span className="font-semibold">
              &pound;{price.toLocaleString()}
            </span>
          </div>
          {actionType === ActionTypes.INCREASE ? (
            <GoArrowUp
              className="bg-green-500 rounded-full fill-white p-1"
              size="2.5rem"
            />
          ) : (
            <GoArrowDown
              className="bg-red-500 rounded-full fill-white p-1"
              size="2.5rem"
            />
          )}
        </div>
      </div>
    </button>
  );
};
