import React from "react";
import { Project } from "@site/src/types";

import ProjectItem from "./ProjectItem";

type ProjectListProps = {
  data: Project[];
};

export default function ProjectList({ data }: ProjectListProps) {
  return (
    <div className="container">
      <div className="row">
        {data.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
