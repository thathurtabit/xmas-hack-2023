import { TimeCounter } from "@/components/atoms/counter/counter";
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
        </>
    )
}
