import { MainGame } from "@/components/templates/main-game";
import { FC } from "react";

const Home: FC = () => {
  return (
    <>
      <section className="min-h-[calc(100vh-64px)] bg-base-200">
        <MainGame />
      </section>
    </>
  );
};

export default Home;
