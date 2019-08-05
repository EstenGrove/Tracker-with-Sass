import React, { useContext } from "react";
import styles from "../css/Day.module.scss";
import { StateContext, ActiveContext } from "../state/StateContext";
import Shift from "./Shift";

const Day = ({ day, modalHandler }) => {
  const { state, dispatch } = useContext(StateContext);
  const { active, setActive } = useContext(ActiveContext);

console.log(state.length);


  const Grooming = state.filter(
    (task, index) => task.ADL === "Grooming" && task.day === "Mon"
  );
  const Bathing = state.filter(
    (task, index) => task.ADL === "Bathing" && task.day === "Mon"
  );
  const Toileting = state.filter(
    (task, index) => task.ADL === "Toileting" && task.day === "Mon"
  );
  const Laundry = state.filter(
    (task, index) => task.ADL === "Laundry" && task.day === "Mon"
  );
  const Meals = state.filter(
    (task, index) => task.ADL === "Meals" && task.day === "Mon"
  );
  const Meds = state.filter(
    (task, index) => task.ADL === "Meds" && task.day === "Mon"
  );
  const Health = state.filter(
    (task, index) => task.ADL === "Health" && task.day === "Mon"
  );

  console.log(Grooming.length);

  return (
    <>
      <div className={styles.Day}>
        <div className={styles.Day_Shift}>
          {Grooming.map((item, index) => (
            <Shift
              ADL={item.ADL}
              day={item.day}
              shift={item.shift}
              openModal={() => modalHandler(item)}
              index={item.id}
              status={item.status}
            />
          ))}
        </div>
        <div className={styles.Day_Shift}>
          {Bathing.map((item, index) => (
            <Shift
              ADL={item.ADL}
              day={item.day}
              shift={item.shift}
              openModal={() => modalHandler(item)}
              index={item.id}
              status={item.status}
            />
          ))}
        </div>
        <div className={styles.Day_Shift}>
          {Toileting.map((item, index) => (
            <Shift
              ADL={item.ADL}
              day={item.day}
              shift={item.shift}
              openModal={() => modalHandler(item)}
              index={item.id}
              status={item.status}
            />
          ))}
        </div>
        <div className={styles.Day_Shift}>
          {Laundry.map((item, index) => (
            <Shift
              ADL={item.ADL}
              day={item.day}
              shift={item.shift}
              openModal={() => modalHandler(item)}
              index={item.id}
            />
          ))}
        </div>
        <div className={styles.Day_Shift}>
          {Meals.map((item, index) => (
            <Shift
              ADL={item.ADL}
              day={item.day}
              shift={item.shift}
              openModal={() => modalHandler(item)}
              index={item.id}
            />
          ))}
        </div>
        <div className={styles.Day_Shift}>
          {Meds.map((item, index) => (
            <Shift
              ADL={item.ADL}
              day={item.day}
              shift={item.shift}
              openModal={() => modalHandler(item)}
              index={item.id}
            />
          ))}
        </div>
        <div className={styles.Day_Shift}>
          {Health.map((item, index) => (
            <Shift
              ADL={item.ADL}
              day={item.day}
              shift={item.shift}
              openModal={() => modalHandler(item)}
              index={item.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Day;
