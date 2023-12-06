import { XmasHackStateContext } from "@/context/context/context";
import { goalCash, startingCash } from "@/settings/settings";
import { useContext } from "react";

export const Header = () => {
  const { moneyAmount } = useContext(XmasHackStateContext);
  const currentCash =
    moneyAmount === startingCash
      ? `£${moneyAmount / 1000}k`
      : `£${moneyAmount.toLocaleString()}`;

  return (
    <header className="flex justify-between p-[32px] bg-cyan-600 text-black">
      <div>
        Current cash: <span className="font-semibold">{currentCash}</span>
      </div>
      <div className="text-3xl">Road to Riches</div>
      <div>
        Goal cash:{" "}
        <span className="font-semibold">&pound;{goalCash / 1000}k</span>
      </div>
    </header>
  );
};
