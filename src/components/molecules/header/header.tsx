import { XmasHackStateContext } from "@/context/context/context";
import { goalCash } from "@/settings/settings";
import { useContext } from "react";

export const Header = () => {
  const { moneyAmount } = useContext(XmasHackStateContext);

  return (
    <header className="flex justify-between">
      <div>
        Current cash:{" "}
        <span className="font-semibold">
          &pound;{String(moneyAmount / 1000)}k
        </span>
      </div>
      <div className="text-3xl">Road to Riches</div>
      <div>
        Goal cash:{" "}
        <span className="font-semibold">&pound;{goalCash / 1000}k</span>
      </div>
    </header>
  );
};
