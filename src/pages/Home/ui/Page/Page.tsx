import { GameOver } from "@/components/organisms/game-over/game-over";
import { GameWon } from "@/components/organisms/game-won/game-won";
import { MainGame } from "@/components/templates/main-game/main-game";
import { setGameStatus } from "@/context/actions/game-status/game-status";
import { XmasHackDispatchContext, XmasHackStateContext } from "@/context/context/context";
import { GameStatus } from "@/context/state/state.types";
import { goalCash, minimumCashUntilBankruptcy } from "@/settings/settings";
import { FC, useContext } from "react";

const Home: FC = () => {
  const dispatch = useContext(XmasHackDispatchContext);
  const { moneyAmount, gameStatus } = useContext(XmasHackStateContext);

  const financialStatus = moneyAmount <= minimumCashUntilBankruptcy ? GameStatus.Bankrupt : moneyAmount >= goalCash ? GameStatus.Won : null;

  if (gameStatus === GameStatus.InProgress && financialStatus) {
    dispatch(setGameStatus(financialStatus));
  }

  return (
    <>
      <section className="min-h-screen bg-emerald-900 items-stretch self-stretch flex flex-col overflow-hidden">
        {gameStatus === GameStatus.Bankrupt ||
        gameStatus === GameStatus.TimeUp ? (
          <GameOver reason={gameStatus} />
        ) : gameStatus === GameStatus.Won ? (
          <GameWon score={10} />
        ) : (
          <MainGame />
        )}
      </section>
    </>
  );
};

export default Home;
