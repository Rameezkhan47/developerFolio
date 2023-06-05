import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
import flutter from "../../assets/images/flutter-svgrepo-com.png";
import mongodb from "../../assets/images/mongodb-svgrepo-com.svg";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                {skills.skillName === "Flutter" ? (
                  <img
                    src={flutter}
                    style={{width: "2.8rem", height: "2.8rem"}}
                    alt=""
                  />
                ) : skills.skillName === "MongoDB" ? (
                  <img
                    src={mongodb}
                    style={{width: "2.8rem", height: "2.8rem"}}
                    alt=""
                  />
                ) : (
                  <i className={skills.fontAwesomeClassname}></i>
                )}
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
