import styles from "./Navbar.module.css";

type PropsType = {
  authToken: boolean;
};

export const Navbar: React.FC<PropsType> = ({ authToken }) => {
  const toggleOpen = () => {
    console.log("click");
  };

  return (
    <nav className={styles.navbar}>
      {!authToken && <button onClick={toggleOpen}>Log in</button>}
    </nav>
  );
};
