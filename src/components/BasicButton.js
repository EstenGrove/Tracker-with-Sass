import React from "react";
import styles from "../css/BasicButton.module.scss";

const BasicButton = ({ text, bgColor, handleBTNClick }) => {
  return (
    <button
      onClick={handleBTNClick}
      className={styles.BasicButton}
      style={{ backgroundColor: `${bgColor}` }}
    >
      {text}
    </button>
  );
};

export default BasicButton;
