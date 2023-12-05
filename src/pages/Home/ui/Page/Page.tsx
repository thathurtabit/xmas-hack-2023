import { TimeCounter } from "@/components/atoms/counter/counter";
import { setHelloWorld } from "@/context/actions/example/hello-world";
import {
  XmasHackDispatchContext,
  XmasHackStateContext,
} from "@/context/context/context";
import { FC, useContext } from "react";

const Home: FC = () => {
  const dispatch = useContext(XmasHackDispatchContext);
  const { helloWorld } = useContext(XmasHackStateContext);

  const handleHelloWorld = () => {
    dispatch(setHelloWorld(!helloWorld));
  };
  return (
    <>
      <section className="min-h-[calc(100vh-64px)] bg-base-200">
        <TimeCounter />
        <button className="btn-primary btn" onClick={handleHelloWorld}>
          Value of Hello World: "{helloWorld.toString()}" - click to change
        </button>
      </section>
    </>
  );
};

export default Home;
