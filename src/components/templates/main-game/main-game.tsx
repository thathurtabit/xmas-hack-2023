import { useContext } from "react";
import { Card } from "@/components/molecules/card/card";
import { Header } from "@/components/molecules/header/header";
import { Footer } from "@/components/molecules/footer/footer";
import { XmasHackStateContext } from "@/context/context/context";

export const MainGame = () => {
const { carData } = useContext(XmasHackStateContext);

console.log(carData);

  return (
    <>
      <Header />
        <h3>On Market</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {carData.filter((car) => car.onMarket === true).map((car, idx) => {
            return (
              <Card
                {...car}
                key={idx}
              />
            );
          })}
        </div>
        <h3>Owned Cars</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
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
