import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { XmasHackProvider } from "@/context/context/context.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <XmasHackProvider>
      <App />
    </XmasHackProvider>
  </BrowserRouter>,
);
