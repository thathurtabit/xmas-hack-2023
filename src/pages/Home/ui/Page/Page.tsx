import { GameOver } from "@/components/organisms/game-over/game-over";
import { MainGame } from "@/components/templates/main-game/main-game";
import { XmasHackStateContext } from "@/context/context/context";
import { numberOfDaysUntilGameOver } from "@/settings/settings";
import { FC, useContext } from "react";

const Home: FC = () => {
  const { moneyAmount, timeInDays } = useContext(XmasHackStateContext);

  return (
    <>
      <section className="min-h-screen bg-base-200 p-8 flex flex-col overflow-hidden">
        {moneyAmount <= 0 || timeInDays >= numberOfDaysUntilGameOver ? <GameOver /> : <MainGame />}
      </section>
    </>
  );
};

export default Home;
