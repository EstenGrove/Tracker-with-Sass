import React from "react";
import styles from "../css/OtherTasksSection.module.scss";

const OtherTasksSection = ({ name1, name2, id1, id2, handleSubmit }) => {
  return (
    <section class={styles.Other}>
      <h3 class={styles.Other_heading}>Other Tasks</h3>
      <hr class={styles.border} />

      {/* LEFT SIDE DESCRIPTION */}
      <div class={styles.Other_main}>
        <div class={styles.Other_left}>
          <h5 class={styles.Other_left_subheading}>Category</h5>
          <span class={styles.Other_left_desc}>
            Choose a category or ADL for the unscheduled task. Apply an optional
            priority and follow-up date.
          </span>

          <h5 class={`${styles.Other_left_subheading} ${styles.last}`}>
            Required Signature
          </h5>
          <span class={styles.Other_left_desc}>
            Employees must sign their name upon entering any unscheduled tasks.
          </span>

          <h5 class={`${styles.mobile_heading} ${styles.hide}`}>Unscheduled</h5>
          <span class={`${styles.mobile_desc} ${styles.hide}`}>
            This section is for entering tasks that were either unscheduled or
            do not fall under an existing ADL category yet need to be tracked
            accordingly.
          </span>
        </div>
        {/* RIGHT SIDE FORM */}
        <div class={styles.Other_right}>
          <h5 class={styles.Other_right_subheading}>ADL</h5>
          <input
            type="text"
            name="adl"
            id="adl"
            class={styles.Other_right_input}
          />
          <h5 class={styles.Other_right_subheading}>Priority</h5>
          <input
            type="text"
            name="adl"
            id="adl"
            class={styles.Other_right_input}
          />
          <h5 class={styles.Other_right_subheading}>Follow-Up Date</h5>
          <input
            type="datetime-local"
            name="followUP"
            id="followUP"
            class={styles.Other_right_input}
          />
          <h5 class={`${styles.Other_right_subheading} ${styles.spacing}`}>
            Employee Signature
          </h5>
          <input
            type="text"
            name="sign"
            id="sign"
            class={styles.Other_right_input}
          />
          <div class={styles.btnWrapper}>
            <button class={styles.Other_right_btn} onClick={handleSubmit}>
              Create Task
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherTasksSection;
