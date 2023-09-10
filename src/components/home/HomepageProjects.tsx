import React from "react";
import clsx from "clsx";

import ProjectItem from "../projects/ProjectItem";
import SectionHeader from "../common/SectionHeader";
import projects from "@site/src/data/projects";

import styles from "./HomepageProjects.module.css";

export default function HomepageProjects({
  className,
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>): JSX.Element {
  const featuredProjects = projects.filter((project) => project.isFeatured);
  return (
    <section className={clsx(styles.projects, className)}>
      <SectionHeader>Featured projects</SectionHeader>
      <div className="container">
        <div className="row">
          {featuredProjects.map((props, idx) => (
            <ProjectItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
