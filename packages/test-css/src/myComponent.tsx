import React from "react";
import styles from "./myComponent.module.css";

export const MyComponent = (): JSX.Element => {
  return (
    <>
      <div>
        <button className={styles.button1}>my button</button>
      </div>
      <div>
        <button className={styles.button2}>my button</button>
      </div>
    </>
  );
};
