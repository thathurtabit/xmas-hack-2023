import { MainGame } from "@/components/templates/main-game/main-game";
import { FC } from "react";

const Home: FC = () => {
  return (
    <>
      <section className="min-h-screen bg-base-200 p-8 flex flex-col overflow-hidden">
        <MainGame />
      </section>
    </>
  );
};

export default Home;
