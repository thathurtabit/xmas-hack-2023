import { GameOver } from "@/components/organisms/game-over/game-over";
import { GameOverReason } from "@/components/organisms/game-over/game-over.types";
import { MainGame } from "@/components/templates/main-game/main-game";
import { XmasHackStateContext } from "@/context/context/context";
import { minimumCashUntilBankruptcy, numberOfDaysUntilGameOver } from "@/settings/settings";
import { FC, useContext } from "react";

const Home: FC = () => {
  const { moneyAmount, timeInDays } = useContext(XmasHackStateContext);

  const gameOverReason = moneyAmount <= minimumCashUntilBankruptcy ? GameOverReason.Bankrupt : timeInDays >= numberOfDaysUntilGameOver ? GameOverReason.Time : undefined;

  return (
    <>
      <section className="min-h-screen bg-base-200 p-8 flex flex-col overflow-hidden">
        {gameOverReason ? <GameOver reason={gameOverReason} /> : <MainGame />}
      </section>
    </>
  );
};

export default Home;
