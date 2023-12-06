import { IconSad } from "@/components/icons/sad/sad";
import { FC } from "react";
import { GameOverProps, GameOverReason } from "./game-over.types";
import { Button } from "@/components/atoms/button/button";

export const GameOver: FC<GameOverProps> = ({ reason }) => {
  const getReasonCopy = () => {
    switch (reason) {
      case GameOverReason.Bankrupt:
        return "You ran out of money. Hope you don't need to pay rent.";
      case GameOverReason.Time:
        return "You wasted two years of your life. Your parents must be so proud.";
    }
  }
  return (
    <section className="fixed top-10 right-10 left-10 bottom-10 flex flex-col items-center justify-center">
      <IconSad className="text-5xl animate-pulse mb-5" />
      <h2 className="text-6xl center font-[800] uppercase">Game over</h2>
      <p>You failed. How pathetic.</p>
      <p className="mb-10">{getReasonCopy()}</p>
      <Button variant="primary" onClick={() => location.reload()}>Try again</Button>
    </section>
  );
};
