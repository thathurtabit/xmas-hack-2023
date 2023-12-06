import { Button } from "@/components/atoms/button/button";
import { IconTrophy } from "@/components/icons/trophy/trophy";
import { FC } from "react";
import { GameWonProps } from "./game-won.types";

export const GameWon: FC<GameWonProps> = ({ score }) => {

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-green-900">
      <IconTrophy className="text-5xl animate-pulse mb-5" />
      <h2 className="text-6xl center font-[800] uppercase">You win</h2>
      <p>That&apos;s it.</p>
      <p className="mb-10">Go home.</p>
      <p className="text-2xl center font-[300] uppercase mb-2">Your score was {score}</p>
      <Button variant="default" onClick={() => location.reload()}>Play again</Button>
    </section>
  );
};
