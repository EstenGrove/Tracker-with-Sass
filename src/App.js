import React from "react";
import { ActiveProvider, StateProvider } from "./state/StateContext";
import "./App.scss";
import Main from "./Main";
import Week from "./components/Week";
import CalendarContainer from "./components/CalendarContainer";
import Calendar from "./components/Calendar";
import AppNav from "./components/AppNav";
import AppHeader from "./components/AppHeader";

function App() {
  return (
    <>
      <StateProvider>
        <div className="App">
          <ActiveProvider>
            <AppNav activeUser="Sara Forts" />
            <AppHeader />
            <Main>
              <CalendarContainer>
                <Calendar>
                  <Week />
                </Calendar>
              </CalendarContainer>
            </Main>
          </ActiveProvider>
        </div>
      </StateProvider>
    </>
  );
}

export default App;
