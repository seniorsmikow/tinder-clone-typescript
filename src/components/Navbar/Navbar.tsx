import styles from "./Navbar.module.scss";
import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { FormsType } from "../../pages/Home/Home";

type PropsType = {
  authToken: boolean;
  active: boolean;
};

export const Navbar: React.FC<PropsType> = ({ authToken, active }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleOpen = () => {
    setShowModal(true);
  };

  return (
    <nav className={styles.navbar}>
      {showModal && <Modal closeModal={setShowModal} type={FormsType.LOGIN} />}
      <ul>
        <li>X-tinder</li>
      </ul>
      {!authToken && (
        <button onClick={toggleOpen} disabled={active}>
          Войдите
        </button>
      )}
    </nav>
  );
};
