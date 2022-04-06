import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [response, setResponse] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "contact_service_rebuild",
        "template_rebuild",
        form.current,
        "KkJ8nnAaH3zur97BD"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    setResponse(true);
  };

  return (
    <div>
      <form onSubmit={sendEmail} ref={form}>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Enter your email'
          className={styles.email}
        />
        <input type='submit' value='Subscribe' className={styles.btn} />
        {response ? (
          <p className={styles.success}>
            You have successfully subscribed to our services.
          </p>
        ) : null}
      </form>
    </div>
  );
};

export default ContactForm;
