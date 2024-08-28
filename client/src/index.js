import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppContext, AppContextProvider } from "./context/appContext.js";
// import FreeConsultation from "./context/FreeConsultation.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <AppContextProvider><App /></AppContextProvider>);
