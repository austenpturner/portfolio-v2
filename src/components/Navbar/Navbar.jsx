import { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";

const Navbar = (props) => {
  const [open, setOpen] = useState(false);
  const [ariaExpanded, setAriaExpanded] = useState(false);
  const [ariaLabel, setAriaLabel] = useState("open");
  const [navTransition, setNavTransition] = useState("none");
  const [tabIndex, setTabIndex] = useState("-1");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const { hidden } = props;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (windowWidth > 1023) {
        setTabIndex("0");
        setOpen(false);
        setNavTransition("none");
      } else if (windowWidth < 1024 && open) {
        setTabIndex("0");
      } else {
        setTabIndex("-1");
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const openNav = () => {
    if (!open) {
      setOpen(true);
      setAriaExpanded(true);
      setAriaLabel("close");
      setNavTransition("translate 500ms ease-in-out");
      setTabIndex("0");
      hidden(open);
      return;
    }
    setOpen(false);
    setAriaExpanded(false);
    setAriaLabel("open");
    setTabIndex("-1");
    hidden(open);
    setTimeout(() => {
      setNavTransition("none");
    }, 500);
  };

  return (
    <nav className={`${styles.container} ${styles.topnav}`}>
      <span id="nav-label" hidden>
        Navigation
      </span>
      <button
        className={`${styles.topnav__button} ${open ? styles.open : ""}`}
        onClick={openNav}
        aria-labelledby="nav-label"
        aria-expanded={ariaExpanded}
        aria-label={ariaLabel}
      >
        <svg className={styles.hamburger} viewBox="0 0 100 100" width="35">
          <rect
            className={`${styles.line} ${styles.line__top}`}
            width="90"
            height="10"
            x="5"
            y="25"
            rx="5"
          ></rect>
          <rect
            className={`${styles.line} ${styles.line__middle}`}
            width="90"
            height="10"
            x="5"
            y="45"
            rx="5"
          ></rect>
          <rect
            className={`${styles.line} ${styles.line__bottom}`}
            width="90"
            height="10"
            x="5"
            y="65"
            rx="5"
          ></rect>
        </svg>
      </button>
      <ul
        className={`${styles.topnav__list}  ${open ? `${styles.open}` : ""}`}
        aria-expanded={ariaExpanded}
        role="dialog"
        style={{ transition: `${navTransition}` }}
        onClick={openNav}
      >
        <li className={styles.topnav__item}>
          <a href="#about" className={styles.topnav__link} tabIndex={tabIndex}>
            About
          </a>
        </li>
        <li className={styles.topnav__item}>
          <a
            href="#portfolio"
            className={styles.topnav__link}
            tabIndex={tabIndex}
          >
            Portfolio
          </a>
        </li>
        <li className={styles.topnav__item}>
          <a
            href="#contact"
            className={styles.topnav__link}
            tabIndex={tabIndex}
          >
            Contact
          </a>
        </li>
        <li className={styles.topnav__item}>
          <a
            href="https://resume.creddle.io/resume/23m33e9lngm"
            target="_blank"
            className={styles.topnav__link}
            tabIndex={tabIndex}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
