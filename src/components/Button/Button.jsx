import styles from "./Button.module.scss";

const Button = ({ text, link, target, download, action }) => {
  return (
    <button className={styles.btn} onClick={action}>
      <a href={link} target={target} download={download}>
        {text}
      </a>
    </button>
  );
};

export default Button;
