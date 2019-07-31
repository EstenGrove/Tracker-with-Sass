import React, { useContext } from "react";
import styles from "../css/Shift.module.scss";
import { ActiveContext, StateContext } from "../state/StateContext";

const Shift = ({ status, shift, day, ADL, openModal, id }) => {
  const { state, dispatch } = useContext(StateContext);
  const { active, setActive } = useContext(ActiveContext);

  const handleShiftClick = (e, shift) => {
    openModal(e);
    state.filter((shift, index) => {
      return shift;
    });
    console.log(shift);
  };
  return (
    <span
      className={
        status ? `${styles.Shift} ${styles[`${status}`]}` : styles.Shift
      }
      onClick={(e, shift) => handleShiftClick(e, shift)}
      data-day={day}
      data-adl={ADL}
      data-shift={shift}
      key={id}
    >
      {shift}
    </span>
  );
};

export default Shift;
