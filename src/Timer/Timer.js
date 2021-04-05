import React from "react";
import styles from "./Timer.module.css";

export default function Timer(props) {
  const { mode, setMode } = props;
  return (
    <div className={styles.timer}>
      <div className={styles.modes}>
        <button
          className={
            mode === "pomodoro"
              ? styles.mode + " " + styles.selectedButton
              : styles.mode
          }
          onClick={() => setMode("pomodoro")}
        >
          <h1>Pomodoro</h1>
        </button>
        <button
          className={
            mode === "shortBreak"
              ? styles.mode + " " + styles.selectedButton
              : styles.mode
          }
          onClick={() => setMode("shortBreak")}
        >
          <h1>Short Break</h1>
        </button>
        <button
          className={
            mode === "longBreak"
              ? styles.mode + " " + styles.selectedButton
              : styles.mode
          }
          onClick={() => setMode("longBreak")}
        >
          <h1>Long Break</h1>{" "}
        </button>
      </div>
      <div className={styles.time}>25:00</div>
      <div className={styles.button}>
        <button className={styles.Start}>
          {" "}
          <h1>Start</h1>{" "}
        </button>
      </div>
    </div>
  );
}
