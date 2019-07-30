import React, { createContext, useReducer, useState, useEffect } from "react";
import { tasks } from "../data/data";

export const StateContext = createContext({});
export const ActiveContext = createContext();

export const updaterFn = (arr, index, action) => {
  const arrDup = [...arr];

  arrDup.filter((item, index) => {
    if (action.index === index) {
      item.status = action.type;
      item.notes = action.data.notes;
      item.signature = action.data.signature;
      item.reassess = action.data.reassess;

      const DATE = new Date();
      const D = DATE.toLocaleDateString();
      const T = DATE.toLocaleTimeString();
      item.timestamp = `Time: ${T}, Date: ${D}`;
    }
    return item;
  });
  return [arrDup];
};

//handles updating state and statusing tasks
const stateReducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return updaterFn(state, action.index, action);
    case "INCOMPLETE":
      return updaterFn(state, action.index, action);
    case "PENDING":
      return updaterFn(state, action.index, action);
    case "MISSED-EVENT":
      return updaterFn(state, action.index, action);
    case "IN-PROGRESS":
      return updaterFn(state, action.index, action);
    case "UPDATE_DAILY":
      const dup5 = [...state];
      const val = action.val;
      dup5.filter((item, index) =>
        item.id === action.id ? (item.name = val) : item
      );
      return [...dup5];
    default:
      break;
  }
};

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, [...tasks]);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const ActiveProvider = ({ children }) => {
  const [active, setActive] = useState(null);

  useEffect(() => {}, [active, setActive]);

  return (
    <ActiveContext.Provider value={{ active, setActive }}>
      {children}
    </ActiveContext.Provider>
  );
};
