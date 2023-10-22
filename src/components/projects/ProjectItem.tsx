import Link from "@docusaurus/Link";
import React from "react";
import { Project } from "@site/src/types";

export default function ProjectItem({ link, shortDescription, title }: Project) {
  return (
    <div className="col col--4 margin-bottom--lg">
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
