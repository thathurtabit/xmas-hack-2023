import { XmasHackStateContext } from "@/context/context/context";
import { goalCash, startingCash } from "@/settings/settings";
import { formatCurrency } from "@/utils/format-currency";
import { useContext } from "react";

export const Header = () => {
  const { moneyAmount } = useContext(XmasHackStateContext);
  const currentCash =
    moneyAmount === startingCash
      ? `£${formatCurrency(moneyAmount / 1000)}k`
      : `£${formatCurrency(moneyAmount)}`;

  return (
    <header className="flex justify-between p-[32px] bg-cyan-500 text-black flex-wrap">
      <div className="text-2xl">
        Current cash: <span className="font-semibold">{currentCash}</span>
      </div>
      <img src="/images/logo.png" className="h-[70px]" />
      <div className="text-2xl">
        Goal cash:{" "}
        <span className="font-semibold">&pound;{goalCash / 1000}k</span>
      </div>
    </header>
  );
};
