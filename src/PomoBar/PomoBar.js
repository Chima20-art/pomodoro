import React, { useState } from "react";
import styles from "./PomoBar.module.css";
import Popup from "reactjs-popup";

export default function PomoBar(props) {
  const {
    shortTime,
    setShortTime,
    longTime,
    setLongTime,
    time,
    setTime,
  } = props;

  return (
    <div className={styles.bar}>
      <div className={styles.logo}>
        <img className={styles.icon} src="/icon-white.png" />
        <h1 className={styles.logoText}>Pomodoro</h1>
      </div>

      <div className={styles.buttons}>
        <button className={styles.button}>
          <img className={styles.icon} src="/graph-white.png" />
          <a className={styles.buttonText}>Reports</a>
        </button>

        <Popup
          modal
          trigger={
            <button className={styles.button}>
              <img className={styles.icon} src="/config-white.png" />
              <a className={styles.buttonText}>Settings</a>
            </button>
          }
          position="top left"
        >
          {(close) => (
            <div className={styles.popupDiv}>
              <div className={styles.content}>
                <div className={styles.header}>TIMER SETTINGS</div>
                <div className={styles.title}>Time (minutes) </div>
                <div className={styles.set1}>
                  <div>pomodoro</div>
                  <input
                    type="number"
                    className={styles.input}
                    value={parseInt(time / 60)}
                    onChange={(v) => {
                      setTime(v.target.value * 60);
                    }}
                  ></input>
                </div>
                <div className={styles.set2}>
                  <div>shortBreak</div>
                  <input
                    type="number"
                    className={styles.input}
                    value={parseInt(shortTime / 60)}
                    onChange={(c) => setShortTime(c.target.value * 60)}
                  ></input>
                </div>
                <div className={styles.set3}>
                  <div>longBreak</div>
                  <input
                    type="number"
                    className={styles.input}
                    value={parseInt(longTime / 60)}
                    onChange={(c) => setLongTime(c.target.value * 60)}
                  ></input>
                </div>
                <a className={styles.close} onClick={close}>
                  &times;
                </a>
              </div>
            </div>
          )}
        </Popup>

        <button className={styles.button}>
          <img className={styles.icon} src="/user-white.png" />
          <a className={styles.buttonText}>Log In</a>
        </button>
      </div>
    </div>
  );
}
