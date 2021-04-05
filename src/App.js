import "./App.css";
import PomoBar from "./PomoBar/PomoBar";
import Timer from "./Timer/Timer";
import { useState } from "react";

function App() {
  const [appMode, setAppMode] = useState("pomodoro");
  return (
    <div
      className={
        appMode === "pomodoro"
          ? "pomodoroMode"
          : appMode === "shortBreak"
          ? "shortBreakMode"
          : "longBreakMode"
      }
    >
      <PomoBar />
      <Timer mode={appMode} setMode={setAppMode} />
    </div>
  );
}

export default App;
