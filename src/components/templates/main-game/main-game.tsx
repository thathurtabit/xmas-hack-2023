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
  const { helloWorld } = useContext(XmasHackStateContext);
  const handleHelloWorld = () => {
    dispatch(setHelloWorld(!helloWorld));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCars((prevCars) => {
        if (prevCars.length <= 4) {
          return prevCars.concat({
            key: Math.floor(Math.random() * 100),
            starting: 55,
            max: 65,
            min: 45,
          });
        }
        return prevCars;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
