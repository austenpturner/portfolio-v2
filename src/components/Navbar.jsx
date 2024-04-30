import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={`${styles.container} ${styles.topnav}`}>
      <ul className={styles.topnav__list}>
        <li className={styles.topnav__item}>
          <a href="/#about" className={styles.topnav__link}>
            About
          </a>
        </li>
        <li className={styles.topnav__item}>
          <a href="/#portfolio" className={styles.topnav__link}>
            Portfolio
          </a>
        </li>
        <li className={styles.topnav__item}>
          <a href="/#contact" className={styles.topnav__link}>
            Contact
          </a>
        </li>
        <li className={styles.topnav__item}>
          <a
            href="https://resume.creddle.io/resume/23m33e9lngm"
            target="_blank"
            className={styles.topnav__link}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
