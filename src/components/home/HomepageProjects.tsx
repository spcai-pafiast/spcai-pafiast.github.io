import Link from "@docusaurus/Link";
import React from "react";
import SectionHeader from "../common/SectionHeader";
import clsx from "clsx";
import projects from "@site/src/data/projects";
import styles from "./HomepageProjects.module.css";
import { Project } from "@site/src/types";

function ProjectItem({ link, shortDescription, title }: Project) {
  return (
    <div className="col col--4">
      <div className="card text--center">
        <div className="card__header">
          <h3>{title}</h3>
        </div>
        <div className="card__body">
          <p>{shortDescription}</p>
        </div>
        <div className="card__footer">
          <Link className="button button--primary button--block" href={link}>
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
}

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
