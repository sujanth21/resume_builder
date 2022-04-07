import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import styles from "./Style.module.css";

import FeedbackImg from "../assets/feedback2.svg";

const Feedback = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h2>Feedback</h2>

        <div className={styles.content}>
          <div>
            <p>
              We welcome all the feedback from our lovely users. We improve our
              platform based on the user experiences.
            </p>
            <p>
              Feel free to send us your thoughts about our platform and features
              to support@rebuild-ga.com
            </p>

            <p>
              We are building lot more awesome features to cater your career
              needs. We love to hear from you, what you want us to have in our
              platform that makes your life lot more easier.{" "}
            </p>
          </div>
          <div className={styles.image}>
            <img src={FeedbackImg} alt='' />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Feedback;
