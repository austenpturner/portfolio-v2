import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={`${styles.container} ${styles.contact__container}`}>
        <h2 className={styles.contact__header}>Contact</h2>
      </div>
    </section>
  );
};
export default Contact;
