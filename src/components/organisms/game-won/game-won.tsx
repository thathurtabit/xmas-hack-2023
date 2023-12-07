import { Button } from "@/components/atoms/button/button";
import { IconTrophy } from "@/components/icons/trophy/trophy";
import { FC } from "react";
import { GameWonProps } from "./game-won.types";
import { motion } from "framer-motion";

export const GameWon: FC<GameWonProps> = ({ score }) => {
  const getScoreCopy = () => {
    const scoreBracket = Math.floor(score / 100);
    switch (scoreBracket) {
      case 0:
        return "You can do better than that.";
      case 1:
        return "Not bad.";
      case 2:
        return "You're getting there.";
      case 3:
        return "You're pretty good.";
      case 4:
        return "You're really good.";
      case 5:
        return "You're amazing.";
      case 6:
        return "You're a legend.";
      default:
        return "Did you cheat?";
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, scale: 2 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 2 }}
      transition={{ duration: 0.5 }}
      className="h-screen flex flex-col items-center justify-center bg-green-900 text-white"
    >
      <IconTrophy className="text-5xl animate-pulse mb-5" />
      <h2 className="text-6xl center font-[800] uppercase">You win</h2>
      <p>That&apos;s it.</p>
      <p className="mb-10">Go home.</p>
      <p className="text-2xl center font-[300] uppercase mb-2">
        You won with {score} days left. {getScoreCopy()}
      </p>
      <Button variant="default" onClick={() => location.reload()}>
        Play again
      </Button>
    </motion.section>
  );
};
