import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./components/Context/StoreContextProvider";
import "antd/dist/reset.css";
import { UserContextProvider } from "./components/Context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserContextProvider>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </UserContextProvider>
  </BrowserRouter>
);
