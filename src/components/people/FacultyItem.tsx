import React from "react";
import { Faculty } from "@site/src/types";

import styles from "./FacultyItem.module.css";

type FacultyItemProps = {
  faculty: Faculty;
};

export default function FacutlyItem({ faculty }: FacultyItemProps) {
  return (
    <div className="col col--6 padding-horiz--md">
      <div className={styles.innerContainer}>
        <div className="padding-top--md text--center">
          <img alt={faculty.name} className={styles.image} src={faculty.image} />
        </div>
        <div className="text--bold text--center">{faculty.name}</div>
        <div className="text--center">{faculty.title}</div>
        <div className="padding-horiz--lg padding-vert--md text--center">{faculty.bio}</div>
      </div>
    </div>
  );
}
