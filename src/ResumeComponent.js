import React from "react";
import ExperienceComponent from "./ExperienceComponent";
import KnowledgeComponent from "./KnowledgeComponent";

function ResumeComponent(props) {
  const style = {
    hr: {
      marginLeft: 0,
    },
  };
  return (
    <>
      <div>
        <h3>Profile</h3>
        <hr style={style.hr} />
      </div>
      <p dangerouslySetInnerHTML={{ __html: props.profile }} />
      <div>
        <h3>Experience</h3>
        <hr style={style.hr} />
      </div>
      {props.experiences.map((experience) => (
        <ExperienceComponent key={experience.company} experience={experience} />
      ))}
      <div>
        <h3>Other Knowledge</h3>
        <hr style={style.hr} />
      </div>
      <KnowledgeComponent knowledge={props.knowledge} />
    </>
  );
}
export default ResumeComponent;
