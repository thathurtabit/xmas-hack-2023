import { TimeCounter } from "@/components/atoms/counter/counter";
import { BasicCarCard } from "@/components/molecules/basic-card-component";
import { Header } from "@/components/molecules/header/header";
import { setHelloWorld } from "@/context/actions/example/hello-world";
import {
  XmasHackDispatchContext,
  XmasHackStateContext,
} from "@/context/context/context";
import { useContext } from "react";

export const MainGame = () => {
  const dispatch = useContext(XmasHackDispatchContext);
  const { helloWorld } = useContext(XmasHackStateContext);
  const handleHelloWorld = () => {
    dispatch(setHelloWorld(!helloWorld));
  };

  return (
    <>
      <Header />
      <TimeCounter />
      <h1>This is the main game screen</h1>
      <button className="btn-primary btn" onClick={handleHelloWorld}>
        Value of Hello World: "{helloWorld.toString()}" - click to change
      </button>

      <div className="flex justify-center space-x-4">
        <BasicCarCard starting={55} max={65} min={42} />
        <BasicCarCard starting={62} max={69} min={49} />
        <BasicCarCard starting={23} max={10} min={45} />
      </div>
    </>
  );
};
