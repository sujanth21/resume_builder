import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import styles from "./Style.module.css";
import AnimatedPage from "../components/AnimatedPage/AnimatedPage";

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "Why should I use a resume builder?",
      answer:
        "Using a resume builder makes the process of creating a resume significantly faster and easier. Ever tried building your resume with Word? The whole process is a huge pain – you make a TINY change to your resume, and the entire resume layout gets completely messed up. With a resume builder, you don’t have to worry about the nitty gritty of resume creation, like font selection, layout, formatting, etc. All you have to do is pick a resume template, fill it in, and then you’re ready to start applying for jobs!",
      open: true,
    },
    {
      question: "Is this a completely free resume builder?",
      answer:
        "Yes, ReBuild is a 100% free resume builder. If you’re on abudget, you can use it to create your resume completely free of charge. And no, unlike some other resume builders out there, we don’t hit you with a paywall once you’ve completed your resume.",
      open: false,
    },
    {
      question: "What is a resume?",
      answer:
        "A resume (also known as a CV, or curriculum vitae) is a 1-2 page document that summarizes your work experience and career history. It usually includes your work history, educational background, achievements, contact information, resume summary or resume objective",
      open: false,
    },
    {
      question: "What's the difference between a CV and a resume?",
      answer:
        "In most countries, the words 'CV' and 'resume' are used interchangeably. In some countries, however, a resume is a document you use to apply for jobs, while a CV is mainly used by academics.",
      open: false,
    },
    {
      question: "What should a resume include?",
      answer:
        "The must-have contents in your resume include Work Experience, Educational Background, Contact Information, Resume sumamry or Resume Objective. The optional ones are Hobbies & Interests, Skills, Volunteering Experience",
      open: false,
    },
  ]);

  const toggle = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );

    console.log(faqs);
  };

  return (
    <AnimatedPage>
      <Header />
      <div className={styles.container}>
        <h2>Frequently Asked Questions</h2>

        <div className={styles.questions}>
          {faqs.map((faq, index) => {
            return (
              <motion.div
                key={index}
                layout
                transition={{ layout: { duration: 1 } }}
                className={styles.card}
                onClick={() => toggle(index)}
              >
                <motion.h3 className={styles.question} layout='position'>
                  {faq.question}
                </motion.h3>
                {faq.open && (
                  <motion.div className={styles.answer}>
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
      <Footer />
    </AnimatedPage>
  );
};

export default FAQ;
