import Navbar from "./Navbar";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div>{/* <p>Austen Turner</p> */}</div>
      <Navbar />
    </div>
  );
};

export default Header;
