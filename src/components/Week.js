import React, { useContext, useState, useRef } from "react";
import styles from "../css/Week.module.scss";
import ADL from "./ADL";
import Day from "./Day";
import Modal from "./Modal";
import Dropdown from "./Dropdown";
import TextInput from "./TextInput";
import Checkbox from "./Checkbox";
import Textarea from "./Textarea";
import StatefulButton from "./StatefulButton";
import OtherTasksSection from "./OtherTasksSection";

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
  const modalHandler = (e, shift) => {
    console.log(e, shift);

    return setIsOpen(!isOpen);
  };

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  return (
    <>
      <div className={styles.Week}>
        <ADL />
        {days.map((day, index) => (
          <Day day={day} modalHandler={modalHandler} />
        
        ))}

      </div>
      <hr style={{ marginTop: "3rem", opacity: ".6" }} />
      <OtherTasksSection />

      <Modal isOpen={isOpen} handleClose={modalHandler}>
        <form onSubmit={handleSubmit} ref={formRef}>
          <Dropdown
            htmlFor="task-status"
            id="task-status"
            name="STATUS"
            label="Choose a status:"
            options={[
              "PENDING",
              "COMPLETE",
              "MISSED-EVENT",
              "NOT-COMPLETE",
              "IN-PROGRESS"
            ]}
            handleChange={handleChange}
          />
          <TextInput
            name="SIGNATURE"
            label="Sign your name:"
            required={true}
            handleChange={handleChange}
          />
          <Checkbox
            label="Re-assess"
            name="REASSESS"
            id="reassess"
            handleCheckbox={handleCheckbox}
            margins="2rem 0"
          />
          <Textarea
            name="TaskStatus_notes"
            label="Notes/Description"
            placeholder="Notes..."
            handleChange={handleChange}
            wrap="soft"
            minLength={0}
            maxLength={250}
            required={true}
          />

          <StatefulButton
            margins="2rem 0"
            bgcolor="hsl(222, 49%, 64%)"
            text="Save"
            action="Saving..."
            callback={e => submitHandler(e)}
          />
        </form>
      </Modal>
    </>
  );
};

export default Week;
