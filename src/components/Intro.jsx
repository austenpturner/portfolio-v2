import styles from "./Intro.module.scss";
import photo from "../assets/handsTypingCode.svg";
import Button from "./Button";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodepen,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Intro = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    if (!modal) {
      setModal(true);
      document.body.classList.add("active-modal");
      return;
    }
    setModal(false);
    document.body.classList.remove("active-modal");
  };

  return (
    <section className={styles.intro}>
      <div className={`${styles.container} ${styles.intro__container}`}>
        <div className={styles.intro__content}>
          <h1 className={styles.intro__heading}>Hi, I'm Austen.</h1>
          <h3 className={styles.intro__subheading}>Front End Developer</h3>
          <p className={styles.intro__description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            accusamus iste eligendi maiores voluptas architecto, ipsa eveniet
            repellat a id consequatur maxime. Cupiditate illum ab sunt quia
            tenetur, nobis exercitationem.
          </p>
          <Button text={`let's connect`} action={toggleModal} />
        </div>
        <img className={styles.intro__image} src={photo} alt="coding image" />
      </div>
      {modal && (
        <div className={styles.intro__modal}>
          <div className={styles.intro__overlay} onClick={toggleModal}></div>
          <div className={styles.intro__modalContent}>
            <ul className={styles.intro__modalList}>
              <li>
                <a href="mailto:austenpturner@msn.com" target="_blank">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className={styles.intro__modalIcon}
                  />
                  <p>Email</p>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/austenpturner/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                  <p>Linkedin</p>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/austenpturner/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                  <p>Instagram</p>
                </a>
              </li>
              <li>
                <a href="https://github.com/austenpturner" target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                  <p>Github</p>
                </a>
              </li>
            </ul>
            <Button text={`X`} action={toggleModal} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Intro;
