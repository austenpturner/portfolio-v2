import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./About.module.scss";
import {
  faBootstrap,
  faCss3Alt,
  faFigma,
  faHtml5,
  faJs,
  faNode,
  faReact,
  faSass,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";

const skills = [
  {
    name: "HTML",
    iconEl: <FontAwesomeIcon icon={faHtml5} className={styles.about__icon} />,
  },
  {
    name: "CSS",
    iconEl: <FontAwesomeIcon icon={faCss3Alt} className={styles.about__icon} />,
  },
  {
    name: "SASS",
    iconEl: <FontAwesomeIcon icon={faSass} className={styles.about__icon} />,
  },
  {
    name: "Javascript",
    iconEl: <FontAwesomeIcon icon={faJs} className={styles.about__icon} />,
  },
  {
    name: "Node.js",
    iconEl: <FontAwesomeIcon icon={faNode} className={styles.about__icon} />,
  },
  {
    name: "React",
    iconEl: <FontAwesomeIcon icon={faReact} className={styles.about__icon} />,
  },
  {
    name: "Bootstrap",
    iconEl: (
      <FontAwesomeIcon icon={faBootstrap} className={styles.about__icon} />
    ),
  },
  {
    name: "Figma",
    iconEl: <FontAwesomeIcon icon={faFigma} className={styles.about__icon} />,
  },
  {
    name: "WordPress",
    iconEl: (
      <FontAwesomeIcon icon={faWordpress} className={styles.about__icon} />
    ),
  },
];

const About = () => {
  return (
    <section className={styles.about}>
      <h2 className={styles.about__header}>About me</h2>
      <p className={styles.about__content}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
        cupiditate autem fuga perspiciatis similique modi natus iure? Earum sunt
        nulla, voluptate voluptatem ipsa rerum temporibus sapiente similique non
        enim, qui fugit cupiditate iste quae laborum autem eaque asperiores
        veniam delectus.
      </p>
      <h3 className={styles.about__subheading}>Skills:</h3>
      <ul className={styles.about__skills}>
        {skills.map((skill) => {
          const { name, iconEl } = skill;
          return (
            <li className={styles.about__skill}>
              {iconEl}
              {name}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default About;
