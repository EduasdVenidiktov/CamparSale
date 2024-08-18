// import React from "react";
import css from "./Modal.module.css"; // Добавьте стили для модального окна

const Modal = ({ onClose, children }) => {
  return (
    <div className={css.modalOverlay}>
      <div className={css.modalContent}>
        {children}
        <button className={css.modalClose} onClick={onClose}>
          Close OOOOOOOOPS!
        </button>
      </div>
    </div>
  );
};

export default Modal;
