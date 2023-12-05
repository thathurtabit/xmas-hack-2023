import { useEffect, useState, useRef } from "react";
import { GoArrowDown, GoArrowUp } from "react-icons/go";

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
  const timeout = useRef<ReturnType<typeof setInterval> | null>(null);

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
    <button onClick={() => console.log(price)}>
      <div className="mt-8 bg-blue-400 h-72 w-52 rounded-md flex flex-col">
        <div className="flex items-center justify-center">
          <div className="p-4 text-center">Price: {price}</div>
          {actionType === ActionTypes.INCREASE ? (
            <GoArrowUp className="bg-green-500 rounded-full" />
          ) : (
            <GoArrowDown className="bg-red-500 rounded-full" />
          )}
        </div>
      </div>
    </button>
  );
};
