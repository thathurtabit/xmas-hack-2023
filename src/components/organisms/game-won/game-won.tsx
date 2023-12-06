import { IconTrophy } from "@/components/icons/trophy/trophy";
import { FC } from "react";

export const GameWon: FC = () => {
  return (
    <section className="fixed top-10 right-10 left-10 bottom-10 flex flex-col items-center justify-center">
      <IconTrophy className="text-5xl animate-pulse mb-5" />
      <h2 className="text-6xl center font-[800] uppercase">You win</h2>
      <p>That&apos;s it.</p>
      <p>Go home.</p>
    </section>
  );
};
