import React, { useState, useEffect } from "react";
import styles from "./TimelineExperience.module.css";
import history from "../../data/history.json";

import AOS from "aos";
import "aos/dist/aos.css";

export const TimelineExperience = () => {
  const [activeIndices, setActiveIndices] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  const handleToggle = (index) => {
    setActiveIndices((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.timeline}>
        <div className={styles.line} />
        {history.map((item, index) => {
          const isActive = activeIndices.includes(index);

          return (
            <div key={index} className={styles.timelineItem}>
              {/* Left column */}
              <div className={styles.left}>
                {index % 2 === 0 && isActive && (
                  <div className={styles.card} data-aos="slide-right">
                    <h3>{`${item.role}`}</h3>
                    <h3>{`${item.organisation}`}</h3>
                    <span className={styles.date}>{`${item.startDate} – ${item.endDate}`}</span>
                    <ul>
                      {item.experiences.map((exp, i) => (
                        <li key={i}>{exp}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Center circle */}
              <div
                className={`${styles.circle} ${isActive ? styles.active : ""}`}
                onClick={() => handleToggle(index)}
              >
                <img src={item.imageSrc} alt="logo" className={styles.logo} />
              </div>

              {/* Right column */}
              <div className={styles.right}>
                {index % 2 !== 0 && isActive && (
                  <div className={styles.card} data-aos="slide-left">
                    <h3>{`${item.role}`}</h3>
                    <h3>{`${item.organisation}`}</h3>
                    <span className={styles.date}>{`${item.startDate} – ${item.endDate}`}</span>
                    <ul>
                      {item.experiences.map((exp, i) => (
                        <li key={i}>{exp}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
