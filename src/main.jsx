import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import "./sass/style.scss";
import Intro from "./components/Intro";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Intro />
  </React.StrictMode>
);
