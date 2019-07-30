import React from "react";
import styles from "../css/Modal.module.scss";

const Modal = ({ isOpen, handleClose, children }) => {
  return (
    <div className={isOpen ? `${styles.Modal} ${styles.isOpen}` : styles.Modal}>
      <h2 onClick={handleClose} className={styles.closeBtn}>
        ×
      </h2>
      <div className={styles.outerWrapper}>
        <div className={styles.innerWrapper}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
