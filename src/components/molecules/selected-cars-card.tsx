import { useContext } from "react";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import cn from "classnames";
import { XmasHackDispatchContext } from "@/context/context/context";
import { ammendMoneyAmount } from "@/context/actions/example/hello-world";
import { CarTypes } from "@/utils/hooks/useGenerateCards.hooks";
import {
  ActionTypes,
  useCarCardTimer,
} from "@/utils/hooks/useCarCardTimer.hooks";

interface BasicCardTypes extends CarTypes {
  removeCarFromSelectedList: (val: number) => void;
}

export const SelectedCarCard = ({
  starting,
  max,
  min,
  id,
  removeCarFromSelectedList,
}: BasicCardTypes) => {
  const dispatch = useContext(XmasHackDispatchContext);

  const { price, moneyAmount, actionType } = useCarCardTimer({
    starting,
    max,
    min,
  });

  return (
    <button
      onClick={() => {
        dispatch(ammendMoneyAmount(moneyAmount + price));
        removeCarFromSelectedList(id);
      }}
    >
      <div
        className={cn(`mt-8 h-72 w-52 rounded-md flex flex-col bg-yellow-600`)}
      >
        <div className="flex items-center justify-center">
          <div className="p-4 text-center text-white">
            Price:{" "}
            <span className="font-semibold">
              &pound;{price.toLocaleString()}
            </span>
          </div>
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
