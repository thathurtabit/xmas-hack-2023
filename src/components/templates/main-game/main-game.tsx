import { BasicCarCard } from "@/components/molecules/basic-card-component";
import { Header } from "@/components/molecules/header/header";
import { Footer } from "@/components/molecules/footer/footer";
import { setHelloWorld } from "@/context/actions/example/hello-world";
import {
  XmasHackDispatchContext,
  XmasHackStateContext,
} from "@/context/context/context";
import { useContext } from "react";
import { useGenerateCards } from "@/utils/hooks/useGenerateCards.hooks";

export const MainGame = () => {
  const dispatch = useContext(XmasHackDispatchContext);
  const { helloWorld } = useContext(XmasHackStateContext);
  const handleHelloWorld = () => {
    dispatch(setHelloWorld(!helloWorld));
  };

  const { removeCarFromList, cars } = useGenerateCards();

  return (
    <>
      <Header />
      <div>
        <button className="btn-primary btn" onClick={handleHelloWorld}>
          Value of Hello World: "{helloWorld.toString()}" - click to change
        </button>

        <div className="grid grid-cols-6 gap-2">
          {cars.map((car) => {
            return (
              <BasicCarCard
                {...car}
                removeCarFromList={removeCarFromList}
                key={car.id}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};
