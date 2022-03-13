import styles from "./Modal.module.scss";
import { LoginForm } from "../../forms/LoginForm/LoginForm";
import { CreateAccountForm } from "../../forms/CreateAccountForm/CreateAccountForm";
import { FormsType } from "../../pages/Home/Home";

type PropsType = {
  closeModal: (open: boolean) => void;
  type: string | null;
};

export const Modal: React.FC<PropsType> = ({ closeModal, type }) => {
  const toggleShow = () => {
    closeModal(false);
  };
  return (
    <div className={styles.modal}>
      {type === FormsType.REGISTRATION ? <CreateAccountForm /> : <LoginForm />}
      <div className={styles.button__close} onClick={toggleShow}>
        x
      </div>
    </div>
  );
};
