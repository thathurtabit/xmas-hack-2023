import { Car } from "@/components/molecules/car/car";
import { Header } from "@/components/molecules/header/header";
import { Footer } from "@/components/molecules/footer/footer";
import {
  XmasHackStateContext,
} from "@/context/context/context";
import { useContext } from "react";

export const MainGame = () => {
  const { carsForSale, carsBought } = useContext(XmasHackStateContext);


  return (
    <>
      <Header />
        <div>
            For sale:
            <div className="flex justify-center space-x-4">
                {carsForSale.map((car, idx) => (
                    <Car key={idx} name={car.name} starting={car.starting} max={car.max} min={car.min} />
                ))}
            </div>
            
            Bought:
            <div className="flex justify-center space-x-4">
                {carsBought.map((car, idx) => (
                    <Car key={idx} name={car.name} starting={car.starting} max={car.max} min={car.min} />
                ))}
            </div>
        </div>
        <Footer />
    </>
  );
};
