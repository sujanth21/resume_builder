import React from "react";
import InputControl from "../InputControl/InputControl";
import styles from "../InputControl/InputControl.module.css";

const SummaryDetails = ({ values, setValues }) => {
  return (
    <>
      <div className={styles.detail}>
        <InputControl
          label='Summary'
          placeholder='Enter your objective/summary'
          value={values?.summary}
          onChange={(e) =>
            setValues((prev) => ({
              ...prev,
              summary: e.target.value,
            }))
          }
        />
      </div>
    </>
  );
};

export default SummaryDetails;
