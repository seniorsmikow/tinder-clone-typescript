import { Navbar } from "../../components/Navbar/Navbar";
import { useState } from "react";
import { Modal } from "../../components/Modal/Modal";
import styles from "./Home.module.scss";

export enum FormsType {
  LOGIN = "login",
  REGISTRATION = "registration",
}

export const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [formType, setFormType] = useState<string | null>(null);
  const authToken = false;

  const handleClick = () => {
    setShowModal(true);
    setFormType(FormsType.REGISTRATION);
  };

  return (
    <div className={styles.home__page}>
      <Navbar authToken={authToken} active={showModal} />
      <h1>Свайп вправо</h1>
      <button
        onClick={handleClick}
        className={styles.button__auth}
        disabled={showModal}
      >
        Создать аккаунт
      </button>
      {showModal && <Modal closeModal={setShowModal} type={formType} />}
    </div>
  );
};
