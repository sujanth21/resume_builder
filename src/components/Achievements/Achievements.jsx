import React from "react";
import { InputControl } from "../InputControl/InputControl";
import styles from "../InputControl/InputControl.module.css";

const Achievements = ({ values, setValues }) => {
  const handlePointUpdate = (value, index) => {
    const temp = { ...values };
    if (!Array.isArray(temp.points)) temp.points = [];
    temp.points[index] = value;
    setValues(temp);
  };

  return (
    <>
      <div className={styles.detail}>
        <div className={styles.column}>
          <label>List your achievements</label>
          <InputControl
            placeholder='Line 1'
            value={values?.points ? values.points[0] : ""}
            onChange={(e) => handlePointUpdate(e.target.value, 0)}
          />
          <InputControl
            placeholder='Line 2'
            value={values?.points ? values.points[1] : ""}
            onChange={(e) => handlePointUpdate(e.target.value, 1)}
          />
          <InputControl
            placeholder='Line 3'
            value={values?.points ? values.points[2] : ""}
            onChange={(e) => handlePointUpdate(e.target.value, 2)}
          />
          <InputControl
            placeholder='Line 4'
            value={values?.points ? values.points[3] : ""}
            onChange={(e) => handlePointUpdate(e.target.value, 3)}
          />
        </div>
      </div>
    </>
  );
};

export default Achievements;
