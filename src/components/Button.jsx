import styles from "./Button.module.scss";

const Button = ({ text, link, target, download }) => {
  return (
    <button className={styles.btn}>
      <a href={link} target={target} download={download}>
        {text}
      </a>
    </button>
  );
};

export default Button;
