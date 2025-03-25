import React, { useRef } from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Projects = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 300;

    if (direction === "left") {
      if (container.scrollLeft === 0) {
        container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
      } else {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    } else {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      if (Math.ceil(container.scrollLeft) >= maxScrollLeft) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className={styles.wrapper} id="projects">
      <h2 className={styles.title}>Projects</h2>

      <div className={styles.carouselWrapper}>
        <button className={styles.navButton} onClick={() => scroll("left")}>
          <ChevronLeft />
        </button>

        <div className={styles.projectScroll} ref={scrollRef}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
        </div>

        <button className={styles.navButton} onClick={() => scroll("right")}>
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};