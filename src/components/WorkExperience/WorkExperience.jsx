import React from "react";

import InputControl from "../InputControl/InputControl";
import styles from "../InputControl/InputControl.module.css";

const WorkExperience = ({ values, setValues }) => {
  const handlePointUpdate = (value, index) => {
    const temp = { ...values };
    if (!Array.isArray(temp.points)) temp.points = [];
    temp.points[index] = value;
    setValues(temp);
  };

  return (
    <>
      <div className={styles.detail}>
        <div className={styles.row}>
          <InputControl
            label='Title'
            placeholder='Enter title eg. Frontend developer'
            value={values?.title}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, title: e.target.value }))
            }
          />
          <InputControl
            label='Company Name'
            placeholder='Enter company name eg. amazon'
            value={values?.companyName}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, companyName: e.target.value }))
            }
          />
        </div>
        <div className={styles.row}>
          <InputControl
            label='Company Website'
            placeholder='Enter company wesite url'
            value={values?.companyLink}
            onChange={(e) =>
              setValues((prev) => ({
                ...prev,
                companyLink: e.target.value,
              }))
            }
          />
          <InputControl
            label='Location'
            placeholder='Enter location eg. Remote'
            value={values?.location}
            onChange={(e) =>
              setValues((prev) => ({
                ...prev,
                location: e.target.value,
              }))
            }
          />
        </div>
        <div className={styles.row}>
          <InputControl
            label='Start Date'
            type='date'
            placeholder='Enter start date of work'
            value={values?.startDate}
            onChange={(e) =>
              setValues((prev) => ({
                ...prev,
                startDate: e.target.value,
              }))
            }
          />
          <InputControl
            label='End Date'
            type='date'
            placeholder='Enter end date of work'
            value={values?.endDate}
            onChange={(e) =>
              setValues((prev) => ({
                ...prev,
                endDate: e.target.value,
              }))
            }
          />
        </div>

        <div className={styles.column}>
          <label>Enter work description</label>
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
        </div>
      </div>
    </>
  );
};

export default WorkExperience;
