import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Member } from "@site/src/types";
import { faEnvelope, faGlobe, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

import styles from "./MemberItem.module.css";

type MemberItemProps = {
  member: Member;
};

export default function MemberItem({ member }: MemberItemProps) {
  const renderLinks = () => {
    return Object.entries(member.links).map((link) => {
      const href = link[0] === "email" ? `mailto:${link[1]}` : link[1];
      let icon = null;
      switch (link[0]) {
        case "email":
          icon = faEnvelope;
          break;
        case "github":
          icon = faGithub;
          break;
        case "linkedin":
          icon = faLinkedin;
          break;
        case "scholar":
          icon = faGraduationCap;
          break;
        case "twitter":
          icon = faTwitter;
          break;
        case "website":
          icon = faGlobe;
          break;
        default:
          icon = null;
      }
      return (
        <a className="padding-horiz--sm" href={href}>
          {icon ? <FontAwesomeIcon icon={icon} /> : link[0]}
        </a>
      );
    });
  };
  return (
    <div className="col col--4 padding-bottom--lg">
      <div className={styles.innerContainer}>
        <div className="padding-top--lg text--center">
          <img alt={member.name} className={styles.image} src={member.image} />
        </div>
        <div className="text--bold text--center">{member.name}</div>
        <div className="text--center">{member.title}</div>
        <div className="padding-horiz--md text--center text--italic">
          {(member.researchInterests || []).join(", ")}
        </div>
        <div className="padding-bottom--lg text--center">{renderLinks()}</div>
      </div>
    </div>
  );
}
