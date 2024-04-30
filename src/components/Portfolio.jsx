import styles from "./Portfolio.module.scss";

const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      <div className={`${styles.container} ${styles.portfolio__container}`}>
        <h2 className={styles.portfolio__header}>Projects</h2>
      </div>
    </section>
  );
};

export default Portfolio;
