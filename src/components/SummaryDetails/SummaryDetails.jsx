import React from "react";
import { TextAreaControl } from "../InputControl/InputControl";
import styles from "../InputControl/InputControl.module.css";

const SummaryDetails = ({ values, setValues }) => {
  return (
    <>
      <div className={styles.detail}>
        <label>Enter your objective/summary</label>
        <TextAreaControl
          placeholder='Enter your objective/summary'
          value={values?.summary}
          onChange={(e) =>
            setValues((prev) => ({
              ...prev,
              summary: e.target.value,
            }))
          }
        ></TextAreaControl>
      </div>
    </>
  );
};

export default SummaryDetails;
