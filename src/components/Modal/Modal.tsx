import styles from "./Modal.module.css";

type PropsType = {
  closeModal: (open: boolean) => void;
};

export const Modal: React.FC<PropsType> = ({ closeModal }) => {
  const toggleShow = () => {
    closeModal(false);
  };
  return (
    <div className={styles.modal}>
      Modal window
      <div onClick={toggleShow}>x</div>
    </div>
  );
};
