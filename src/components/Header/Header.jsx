import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.scss";

const Header = (props) => {
  const { hidden } = props;
  return (
    <header className={styles.header}>
      <Navbar hidden={hidden} />
    </header>
  );
};

export default Header;
