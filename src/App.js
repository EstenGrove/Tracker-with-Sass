import React from "react";
import { ActiveProvider, StateProvider } from "./state/StateContext";
import "./App.scss";
import Main from "./Main";
import Week from "./components/Week";
import Calendar from "./components/Calendar";

function App() {
  return (
    <>
      <StateProvider>
        <div className="App">
          <ActiveProvider>
            <Main>
              <Calendar>
                <Week />
              </Calendar>
            </Main>
          </ActiveProvider>
        </div>
      </StateProvider>
    </>
  );
}

export default App;
