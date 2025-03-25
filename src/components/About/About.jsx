import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <ul className={styles.educationItems}>
          <li className={styles.educationItem}>
            <img src="/assets/about/pennstateuniversity.png" alt="Penn State Logo" className={styles.educationLogo} />
            <div className={styles.educationItemText}>
              <h3>MS CS</h3>
              <p>Pennsylvania State University, Harrisburg</p>
            </div>
          </li>
          <li className={styles.educationItem}>
            <img src="/assets/about/gitam.png" alt="GITAM Logo" className={styles.educationLogo} />
            <div className={styles.educationItemText}>
              <h3>B.Tech CS</h3>
              <p>Gandhi Institute of Technology and Management (GITAM), India</p>
            </div>
          </li>
        </ul>

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="/assets/about/serverIcon.png" alt="Full Stack Icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Development</h3>
              <p>
                Experienced in building scalable web applications using Core Java, Spring Boot, JavaScript, React, Python, Flask, and microservices architecture.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="/assets/about/cursorIcon.png" alt="AI Icon" />
            <div className={styles.aboutItemText}>
              <h3>Machine Learning & Artificial Intelligence</h3>
              <p>
                Proficient in deep learning, computer vision, and NLP, working with frameworks like PyTorch and TensorFlow to develop data science solutions.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="/assets/about/uiIcon.png" alt="Data Engineering Icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Engineering & Business Intelligence</h3>
              <p>
                Skilled in building data pipelines, ETL processes, and analytics dashboards using SQL, Power BI, Snowflake, and cloud platforms like AWS and GCP.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
