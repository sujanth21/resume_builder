import React from "react";
import InputControl from "../InputControl/InputControl";
import styles from "../InputControl/InputControl.module.css";

const Education = ({ values, setValues }) => {
  return (
    <>
      <div className={styles.detail}>
        <div className={styles.row}>
          <InputControl
            label='Title'
            placeholder='Enter title eg. B-tech'
            value={values?.title}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, title: e.target.value }))
            }
          />
        </div>
        <InputControl
          label='Institution Name'
          placeholder='Enter name of your institution'
          value={values?.institution}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, institution: e.target.value }))
          }
        />
        <div className={styles.row}>
          <InputControl
            label='Start Date'
            type='date'
            placeholder='Enter start date of this education'
            value={values?.startDate}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, startDate: e.target.value }))
            }
          />
          <InputControl
            label='End Date'
            type='date'
            placeholder='Enter end date of this education'
            value={values?.endDate}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, endDate: e.target.value }))
            }
          />
        </div>
      </div>
    </>
  );
};

export default Education;
