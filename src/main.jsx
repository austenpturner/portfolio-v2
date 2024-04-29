import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import "./sass/style.scss";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Intro />
    <About />
    <Portfolio />
    <Contact />
    <Footer />
  </React.StrictMode>
);
