import { XmasHackStateContext } from "@/context/context/context";
import { useContext } from "react";

export const Header = () => {
  const { moneyAmount } = useContext(XmasHackStateContext);

  return (
    <header className="flex justify-between">
      <div>Current cash: {String(moneyAmount)}k</div>
      <div className="text-3xl">Road to Riches</div>
      <div>Goal cash: 200k</div>
    </header>
  );
};
