import { IconSad } from "@/components/icons/sad/sad";
import { FC } from "react";
import { GameOverProps } from "./game-over.types";
import { Button } from "@/components/atoms/button/button";
import { GameStatus } from "@/context/state/state.types";
import { motion } from "framer-motion";

export const GameOver: FC<GameOverProps> = ({ reason }) => {
  const getReasonCopy = () => {
    switch (reason) {
      case GameStatus.Bankrupt:
        return "You ran out of money";
      case GameStatus.TimeUp:
        return "You ran out of time";
    }
  };
  return (
    <motion.section
      initial={{ opacity: 0, scale: 2 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 2 }}
      transition={{ duration: 0.5 }}
      className="h-screen flex flex-col items-center justify-center bg-red-900"
    >
      <IconSad className="text-5xl animate-pulse mb-5" />
      <h2 className="text-6xl center font-[800] uppercase">Game over</h2>
      <p>How pathetic. Your parents must be so proud.</p>
      <p className="mb-10">Everyone was right about you.</p>
      <p className="text-2xl center font-[300] uppercase mb-2">
        {getReasonCopy()}
      </p>
      <Button variant="default" onClick={() => location.reload()}>
        Try again
      </Button>
    </motion.section>
  );
};
