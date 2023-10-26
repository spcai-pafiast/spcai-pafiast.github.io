import React from "react";
import clsx from "clsx";
import { ProjectId } from "@site/src/types";
import { getProjectById } from "@site/src/data/projects";

type ProjectBadgesProps = {
  addMargin?: boolean;
  projectId: ProjectId;
};

export default function ProjectBadges({ addMargin = true, projectId }: ProjectBadgesProps) {
  const {
    isCollaborative = false,
    isFeatured = false,
    isFunded = false,
    isOpenSource = false,
    isOurs = false,
  } = getProjectById(projectId);
  // Check if all false
  if (!isCollaborative && !isFeatured && !isFunded && !isOpenSource && !isOurs) {
    return null;
  }
  return (
    <div className={clsx(addMargin && "margin-bottom--md")} style={{ lineHeight: 1 }}>
      {isOurs && <span className="badge badge--primary margin-horiz--xs">GRC-LED</span>}
      {/* {isFeatured && <span className="badge badge--info margin-horiz--xs">FEATURED</span>} */}
      {isFunded && <span className="badge badge--warning margin-horiz--xs">FUNDED</span>}
      {isOpenSource && <span className="badge badge--secondary margin-horiz--xs">OPEN SOURCE</span>}
    </div>
  );
}
