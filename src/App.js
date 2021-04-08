import "./App.css";
import PomoBar from "./PomoBar/PomoBar";
import Timer from "./Timer/Timer";
import { useState } from "react";

function App() {
  const [appMode, setAppMode] = useState("pomodoro");
  const [time, setTime] = useState(1500);
  const [shortTime, setShortTime] = useState(300);
  const [longTime, setLongTime] = useState(600);

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
      <PomoBar
        time={time}
        setTime={setTime}
        shortTime={shortTime}
        setShortTime={setShortTime}
        longTime={longTime}
        setLongTime={setLongTime}
      />
      <Timer
        mode={appMode}
        setMode={setAppMode}
        temps1={time}
        setTemps1={setTime}
        temps2={shortTime}
        setTemps2={setShortTime}
        temps3={longTime}
        setTemps3={setLongTime}
      />
    </div>
  );
}

export default App;
