import { useEffect, useState, useRef, useContext } from "react";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import cn from "classnames";
import {
  XmasHackDispatchContext,
  XmasHackStateContext,
} from "@/context/context/context";
import { ammendMoneyAmount } from "@/context/actions/example/hello-world";

enum ActionTypes {
  INCREASE = "increase",
  DECREASE = "decrease",
}

export const BasicCarCard = ({
  starting,
  max,
  min,
}: {
  [value: string]: number;
}) => {
  const [price, setPrice] = useState(starting);
  const [actionType, setactionType] = useState("increase");
  const [selected, setSelected] = useState(false);
  const [remove, setRemove] = useState(false);

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
    }, 500);

    return () => {
      clearInterval(timeout.current as ReturnType<typeof setInterval>);
    };
  }, [actionType, max, min]);

  const handleMoneyAmount = () => {
    if (!selected) {
      dispatch(ammendMoneyAmount(moneyAmount - price));
    }
    if (selected) {
      dispatch(ammendMoneyAmount(moneyAmount + price));
    }
  };

  if (remove) {
    return null;
  }

  return (
    <button
      onClick={() => {
        handleMoneyAmount();
        setSelected((prevState) => {
          if (prevState) {
            setRemove(true);
          }
          return !prevState;
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
