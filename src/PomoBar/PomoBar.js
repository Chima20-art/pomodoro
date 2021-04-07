import React from "react";
import styles from "./PomoBar.module.css";
import Popup from "reactjs-popup";

export default function PomoBar() {
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
              Content here
              <a className={styles.close} onClick={close}>
                &times;
              </a>
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
