import { FC, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "@/app/Layout";
import { Home, NoMatch } from "@/pages";
import { About } from "@/pages/About";
import { XmasHackDispatchContext } from "@/context/context/context";
import { EAction } from "@/context/actions/action.types";

const App: FC = () => {
  const dispatch = useContext(XmasHackDispatchContext);

  setInterval(() => {
    dispatch({ type: EAction.INCREMENT_TIME_DAYS });
  }, 1000);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route path="/about" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
