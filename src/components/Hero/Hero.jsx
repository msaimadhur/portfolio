import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Madhur!</h1>
        <p className={styles.description}>
        I transform ideas into scalable solutions, bridging the gap from design to deployment. I design pipelines, train models, optimize cloud infrastructure, and craft end-to-end business stories through data-driven insights by streamlining workflows, and engineering future-ready tech.
        </p>
        <a href="mailto:saimadhurmallampalli@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={"assets/hero/Profile.jpg"}
        alt="image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
