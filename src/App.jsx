import { useState } from "react";
import "./sass/style.scss";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [stopScroll, setStopScroll] = useState(false);

  const handleStopScroll = (navOpen, windowSize) => {
    if (!navOpen && windowSize < 1024) {
      setStopScroll(true);
      document.body.style.overflowY = "hidden";
      document.body.style.height = "100vh";
      //   console.log("stop scroll");
    } else {
      setTimeout(() => {
        setStopScroll(false);
      }, 250);
      document.body.style.overflowY = "auto";
      document.body.style.height = "100%";
      //   console.log("allow scroll");
    }
  };

  return (
    <div className="app">
      {/* <div className={stopScroll ? "overlay" : ""}></div> */}
      <Header hidden={handleStopScroll} />
      <Intro />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
