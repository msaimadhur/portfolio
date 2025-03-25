import React, { useState } from "react";
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";

import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as DiIcons from "react-icons/di";
import * as BiIcons from "react-icons/bi";

const iconLibs = {
  fa: FaIcons,
  si: SiIcons,
  di: DiIcons,
  bi: BiIcons,
};


const categories = [
  "Programming",
  "Frameworks",
  "Databases",
  "Machine Learning",
  "Business Intelligence",
  "Cloud",
  "DevOps",
  "Tools",
];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Programming");

  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory
  );

  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>

      <div className={styles.skills}>
        {/* Category Tabs */}
        <div className={styles.tabs}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.tabButton} ${
                activeCategory === cat ? styles.activeTab : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className={styles.skillsGrid}>
          {filteredSkills.map((skill, id) => {
            const [lib, iconName] = skill.imageSrc.split(":");
            const IconComponent = iconLibs[lib]?.[iconName];
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  {IconComponent ? <IconComponent size={50} /> : null}
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
