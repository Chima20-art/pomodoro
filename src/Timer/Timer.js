import React from "react";
import styles from "./Timer.module.css";
import { useState } from "react";
import { useEffect } from "react";
export default function Timer(props) {
  const [btnState, setBtnState] = useState("Start");

  const { mode, setMode } = props;
  const { temps1, setTemps1 } = props;
  const { temps2, setTemps2 } = props;
  const { temps3, setTemps3 } = props;

  var onChange = () => {
    if (btnState === "Start") {
      setBtnState("Stop");
    } else {
      setBtnState("Start");
    }
  };

  useEffect(() => {
    if (btnState === "Stop") {
      const interval = setInterval(() => {
        if (mode === "pomodoro" && temps1 > 0) {
          setTemps1(temps1 - 1);
        }
        if (mode === "shortBreak" && temps2 > 0) {
          setTemps2(temps2 - 1);
        }
        if (mode === "longBreak" && temps3 > 0) {
          setTemps3(temps3 - 1);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [temps1, temps2, temps3, setTemps1, setTemps2, setTemps3, btnState]);

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

  var timeChosen =
    mode === "pomodoro" ? time1 : mode === "shortBreak" ? time2 : time3;

  return (
    <div className={styles.timer}>
      <div className={styles.modes}>
        <div
          className={
            mode === "pomodoro"
              ? styles.mode + " " + styles.selectedButton
              : styles.mode
          }
          onClick={() => {
            setMode("pomodoro");
            setBtnState("Start");
            setTemps1(1500);
          }}
        >
          <h1>Pomodoro</h1>
        </div>
        <div
          className={
            mode === "shortBreak"
              ? styles.mode + " " + styles.selectedButton
              : styles.mode
          }
          onClick={() => {
            setMode("shortBreak");
            setBtnState("Start");
            setTemps2(300);
          }}
        >
          <h1>Short Break</h1>
        </div>
        <div
          className={
            mode === "longBreak"
              ? styles.mode + " " + styles.selectedButton
              : styles.mode
          }
          onClick={() => {
            setMode("longBreak");
            setBtnState("Start");
            setTemps3(600);
          }}
        >
          <h1>Long Break</h1>{" "}
        </div>
      </div>
      <div className={styles.time}>{timeChosen}</div>
      <div className={styles.button}>
        <button className={styles.Start} onClick={() => onChange()}>
          <h1>{btnState}</h1>
        </button>
      </div>
    </div>
  );
}
