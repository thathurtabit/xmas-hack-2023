import { IconSad } from "@/components/icons/sad/sad";
import { FC } from "react";

export const GameOver: FC = () => {
  return (
    <section className="fixed top-10 right-10 left-10 bottom-10 flex flex-col items-center justify-center">
      <IconSad className="text-5xl animate-pulse mb-5" />
      <h2 className="text-6xl center font-[800] uppercase">Game over</h2>
    </section>
  );
};
