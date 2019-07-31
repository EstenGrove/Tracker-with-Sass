import React from "react";
import styles from "../css/Dropdown.module.scss";

const Dropdown = ({
  htmlFor,
  id,
  label,
  options,
  name,
  handleChange,
  handleClick = null,
  defaultValue,
  placeholder
}) => {
  return (
    <div className={styles.dropdown}>
      <label htmlFor="dropdown">{label}</label>
      <input
        list={id}
        name={name}
        className={styles.dropdown_input}
        onChange={handleChange}
        onClick={handleClick}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
      <datalist id={id} className={styles.dropdownList}>
        {options.map((option, index) => (
          <option
            value={option}
            key={index}
            className={styles.dropdown_option}
          />
        ))}
      </datalist>
    </div>
  );
};
export default Dropdown;
