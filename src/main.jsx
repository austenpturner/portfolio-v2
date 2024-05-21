import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/style.scss";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

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
