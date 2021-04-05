import React from "react";
import styles from "./PomoBar.module.css";

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
        <button className={styles.button}>
          <img className={styles.icon} src="/config-white.png" />
          <a className={styles.buttonText}>Settings</a>
        </button>
        <button className={styles.button}>
          <img className={styles.icon} src="/user-white.png" />
          <a className={styles.buttonText}>Log In</a>
        </button>
      </div>
    </div>
  );
}
