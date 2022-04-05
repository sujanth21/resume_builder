import React from "react";
import { InputControl, TextAreaControl } from "../InputControl/InputControl";
import styles from "../InputControl/InputControl.module.css";

const Achievements = ({ values, setValues }) => {
  return (
    <>
      <div className={styles.detail}>
        <div className={styles.column}>
          <label>List your achievements</label>
          <InputControl
            placeholder='Enter achievement'
            value={values?.achievement}
            onChange={(e) =>
              setValues((prev) => ({
                ...prev,
                achievement: e.target.value,
              }))
            }
          />
          <div className={styles.column}>
            <label>Enter short description</label>
            <TextAreaControl
              placeholder='Enter short description'
              value={values?.description}
              onChange={(e) =>
                setValues((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
            ></TextAreaControl>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements;
