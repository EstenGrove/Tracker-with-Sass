import React, { useContext, useState, useRef } from "react";
import styles from "../css/Week.module.scss";
import ADL from "./ADL";
import Day from "./Day";
import { StateContext, ActiveContext } from "../state/StateContext";
import { useFormController } from "../utils/useFormController";

const Week = () => {
  const { state, dispatch } = useContext(StateContext);
  const { active, setActive } = useContext(ActiveContext);

  const {
    inputs,
    handleChange,
    handleCheckbox,
    handleSubmit
  } = useFormController();
  const formRef = useRef();

  const [isOpen, setIsOpen] = useState(false);

  // used for submitting the modal form
  const submitHandler = e => {
    e.preventDefault();

    const { STATUS, SIGNATURE = null, REASSESS = false } = inputs;

    console.group("%cMODAL ENTRIES", "color: #5c75ea;font-size: 22px;");
    console.log(STATUS);
    console.log(SIGNATURE);
    console.log(REASSESS);
    console.groupEnd();

    // DISPATCH FOR NEW STATE CHANGE
    dispatch({
      type: `${STATUS}`,
      signature: SIGNATURE,
      reassess: REASSESS
    });

    // FORM RESET STARTS HERE...
    formRef.current.reset();

    setTimeout(() => {
      setIsOpen(false);
    }, 2000);
  };

  // handles opening the modal
  const modalHandler = e => {
    console.group(
      "%cClick Event Details",
      "color: #5c75ea; background-color: #eaecef;font-size: 20px;"
    );
    console.log(e.target);
    console.log(e.target.getAttribute("data-day"));
    console.log(e.target.getAttribute("data-adl"));
    console.log(e.target.getAttribute("data-shift"));
    console.groupEnd();

    return setIsOpen(!isOpen);
  };
  return (
    <div className={styles.Week}>
      <ADL />
      <Day day="Sunday" modalHandler={modalHandler} />
      <Day day="Monday" modalHandler={modalHandler} />
      <Day day="Tuesday" modalHandler={modalHandler} />
      <Day day="Wednesday" modalHandler={modalHandler} />
      <Day day="Thursday" modalHandler={modalHandler} />
      <Day day="Friday" modalHandler={modalHandler} />
      <Day day="Saturday" modalHandler={modalHandler} />
    </div>
  );
};

export default Week;
