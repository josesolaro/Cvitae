import React from "react";
import ExperienceComponent from "./ExperienceComponent";

function ResumeComponent(props) {
  const style = {
    hr: {
      marginLeft: 0
    }
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
      {props.experiences.map(experience => (
        <ExperienceComponent key={experience.company} experience={experience} />
      ))}
    </>
  );
}
export default ResumeComponent;
