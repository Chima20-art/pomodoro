import React from "react";
import styles from "./Timer.module.css";
import useState from "react";

export default function Timer(props) {
  const { mode, setMode } = props;
  const { temps1, setTemps1 } = props;
  const { temps2, setTemps2 } = props;
  const { temps3, setTemps3 } = props;

  var convert = (x) => {
    var minutes = parseInt(x / 60);
    var seconds = x % 60;
    var Minutes = minutes < 10 ? "0" + minutes : minutes;
    var Seconds = seconds < 10 ? "0" + seconds : seconds;

    return Minutes + ":" + Seconds;
  };

  var time1 = convert(temps1);
  var time2 = convert(temps2);
  var time3 = convert(temps3);

  return (
    <div className={styles.timer}>
      <div className={styles.modes}>
        <div
          className={
            mode === "pomodoro"
              ? styles.mode + " " + styles.selectedButton
              : styles.mode
          }
          onClick={() => setMode("pomodoro")}
        >
          <h1>Pomodoro</h1>
        </div>
        <div
          className={
            mode === "shortBreak"
              ? styles.mode + " " + styles.selectedButton
              : styles.mode
          }
          onClick={() => setMode("shortBreak")}
        >
          <h1>Short Break</h1>
        </div>
        <div
          className={
            mode === "longBreak"
              ? styles.mode + " " + styles.selectedButton
              : styles.mode
          }
          onClick={() => setMode("longBreak")}
        >
          <h1>Long Break</h1>{" "}
        </div>
      </div>
      <div className={styles.time}>
        {mode === "pomodoro" ? time1 : mode === "shortBreak" ? time2 : time3}
      </div>
      <div className={styles.button}>
        <button className={styles.Start}>
          {" "}
          <h1>Start</h1>{" "}
        </button>
      </div>
    </div>
  );
}
