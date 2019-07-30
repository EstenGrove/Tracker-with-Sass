import React from "react";
import { ActiveProvider, StateProvider } from "./state/StateContext";
import "./App.scss";
import Main from "./Main";
import Calendar from "./components/Calendar";

function App() {
  return (
    <>
      <StateProvider>
        <div className="App">
          <Main>
            <Calendar />
          </Main>
        </div>
      </StateProvider>
    </>
  );
}

export default App;
