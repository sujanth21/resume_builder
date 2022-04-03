import React from "react";

import styles from "./InputControl.module.css";

export const InputControl = ({ label, ...props }) => {
  return (
    <div className={styles.container}>
      {label && <label htmlFor=''>{label}</label>}
      <input type='text' {...props} />
    </div>
  );
};

export const TextAreaControl = ({ label, ...props }) => {
  return (
    <div className={styles.container}>
      {label && <label htmlFor=''>{label}</label>}
      <textarea {...props} rows='5'></textarea>
    </div>
  );
};
