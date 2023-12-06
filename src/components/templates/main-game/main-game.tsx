import { useContext } from "react";
import { Card } from "@/components/molecules/card/card";
import { Header } from "@/components/molecules/header/header";
import { Footer } from "@/components/molecules/footer/footer";
import { XmasHackStateContext } from "@/context/context/context";
import { carSpeed } from "@/settings/settings";
import { motion } from "framer-motion";

export const MainGame = () => {
const { carData } = useContext(XmasHackStateContext);

  return (
    <>
      <Header />
        <h3>On Market</h3>
        <motion.div 
            className="flex gap-2"       
            initial={{ x: `120vw`, y: 0 }}
            animate={{ x: `-25vw` }}
            transition={{
                x: { duration: carSpeed, ease: "linear", repeat: Infinity, repeatType: "loop" },
                ease: "linear",
            }}
        >
          {carData.filter((car) => car.onMarket === true).map((car, idx) => {
            return (
              <Card
                {...car}
                key={idx}
              />
            );
          })}
        </motion.div>
        <h3>Owned Cars</h3>
        <div className="flex gap-2 max-w-5xl">
          {carData.filter((car) => car.onMarket === false).map((car, idx) => {
            return (
              <Card
                {...car}
                key={idx}
              />
            );
          })}
        </div>
      <Footer />
    </>
  );
};
