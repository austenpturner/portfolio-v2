import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import styles from "./Footer.module.scss";

const Footer = () => {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className={styles.footer}>
      <button className={styles.upBtn} onClick={scrollToTop}>
        <FontAwesomeIcon icon={faAngleUp} className={styles.upBtn__icon} />
      </button>
    </footer>
  );
};

export default Footer;
