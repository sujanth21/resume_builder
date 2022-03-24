import React from "react";
import InputControl from "../InputControl/InputControl";
import styles from "../InputControl/InputControl.module.css";

const SummaryDetails = () => {
  return (
    <>
      <div className={styles.detail}>
        <InputControl
          label='Summary'
          placeholder='Enter your objective/summary'
        />
      </div>
    </>
  );
};

export default SummaryDetails;
