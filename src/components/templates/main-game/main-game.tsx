import { BasicCarCard } from "@/components/molecules/basic-card-component";
import { Header } from "@/components/molecules/header/header";
import { Footer } from "@/components/molecules/footer/footer";
import { setHelloWorld } from "@/context/actions/example/hello-world";
import {
  XmasHackDispatchContext,
  XmasHackStateContext,
} from "@/context/context/context";
import { SetStateAction, useContext, useEffect, useState } from "react";

export const MainGame = () => {
  const [cars, setCars] = useState<SetStateAction<{ [num: string]: number }>[]>(
    [],
  );

  const dispatch = useContext(XmasHackDispatchContext);
  const { helloWorld, moneyAmount } = useContext(XmasHackStateContext);
  const handleHelloWorld = () => {
    dispatch(setHelloWorld(!helloWorld));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCars((prevCars) => {
        if (prevCars.length <= 4) {
          const starting = Math.floor(Math.random() * (moneyAmount * 0.6)) + (moneyAmount * 0.6)

          return prevCars.concat({
            // TODO: use better key than random number
            key: Math.floor(Math.random() * 100),
            starting,
            max: Math.floor(starting * 1.1),
            min: Math.floor(starting * 0.9),
          });
        }
        return prevCars;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [moneyAmount]);

  return (
    <>
      <Header />
      <div>
        <button className="btn-primary btn" onClick={handleHelloWorld}>
          Value of Hello World: "{helloWorld.toString()}" - click to change
        </button>

        <div className="grid grid-cols-6 gap-2">
          {cars.map((car) => {
            return <BasicCarCard {...car} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};
