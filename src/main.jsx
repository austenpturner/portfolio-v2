import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import "./sass/style.scss";
import Intro from "./components/Intro";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Intro />
    <Footer />
  </React.StrictMode>
);
