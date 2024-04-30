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
import Button from "./Button";
import Resume from "../assets/resume.pdf";

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
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.about__header}>About me</h2>
        <p className={styles.about__para}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
          cupiditate autem fuga perspiciatis similique modi natus iure? Earum
          sunt nulla, voluptate voluptatem ipsa rerum temporibus sapiente
          similique non enim, qui fugit cupiditate iste quae laborum autem eaque
          asperiores veniam delectus.
        </p>
        <p className={styles.about__para}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci,
          quis! Cupiditate, eius!
        </p>
        <h3 className={styles.about__skills}>Skills:</h3>
        <ul className={styles.about__skillsList}>
          {skills.map((skill) => {
            const { name, iconEl } = skill;
            return (
              <li className={styles.about__skill}>
                {iconEl}
                <p>{name}</p>
              </li>
            );
          })}
        </ul>
        <h4 className={styles.about__resume}>
          That's not all, folks! Please see my resume for more details.
        </h4>
        <Button
          text={`download resume`}
          link={Resume}
          target={`_blank`}
          download={`AustenTurnerResume.pdf`}
        />
      </div>
    </section>
  );
};

export default About;
