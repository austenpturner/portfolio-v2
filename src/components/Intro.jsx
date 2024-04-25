import styles from "./Intro.module.scss";

const Intro = () => {
  return (
    <div className={styles.intro}>
      <h1 className={styles.intro__heading}>Hi, I'm Austen.</h1>
      <h2 className={styles.intro__subheading}>Front End Developer</h2>
      <p className={styles.intro__description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        accusamus iste eligendi maiores voluptas architecto, ipsa eveniet
        repellat a id consequatur maxime. Cupiditate illum ab sunt quia tenetur,
        nobis exercitationem.
      </p>
      <button className={styles.resumeBtn}>download resume</button>
    </div>
  );
};

export default Intro;
