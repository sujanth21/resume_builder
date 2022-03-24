import React from "react";
import InputControl from "../InputControl/InputControl";
import styles from "../InputControl/InputControl.module.css";

const OtherDetails = () => {
  return (
    <>
      <div className={styles.detail}>
        <InputControl label='Other' placeholder='Enter something' />
      </div>
    </>
  );
};

export default OtherDetails;
