import { Navbar } from "../../components/Navbar/Navbar";
import { useState } from "react";
import { Modal } from "../../components/Modal/Modal";

export const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const authToken = false;

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div>
      <Navbar authToken={authToken} />
      <h1>Swipe right</h1>
      <button onClick={handleClick}>
        {authToken ? "Signout" : "Create account"}
      </button>
      {showModal && <Modal closeModal={setShowModal} />}
    </div>
  );
};
