import { setHelloWorld } from "@/context/actions/example/hello-world";
import { XmasHackDispatchContext, XmasHackStateContext } from "@/context/context/context";
import { FC, useContext } from "react";

const Home: FC = () => {
  const dispatch = useContext(XmasHackDispatchContext)
  const {helloWorld} = useContext(XmasHackStateContext)

  const handleHelloWorld = () => {
    dispatch(setHelloWorld(!helloWorld))
  }
  return (
    <>
      <section>
        <div className="hero min-h-[calc(100vh-64px)] bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="/images/hero.webp"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">About Page</h1>
              <h2 className="text-5xl font-bold">{helloWorld ? 'HELLO WORLD! 👋' : 'Goodbye cruel world 😢'}</h2>
              <p className="py-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
                minima laboriosam maxime sed dignissimos harum provident itaque
                fugiat. A repellat aliquid inventore dolor tempora, omnis
                perferendis aspernatur quo nisi excepturi. Ex, ullam odio iusto
                esse necessitatibus doloremque repudiandae!
              </p>
              <button className="btn-primary btn" onClick={handleHelloWorld}>Get Started</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
