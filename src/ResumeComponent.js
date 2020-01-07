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
      <footer style ={{right:0, botton: 0, textAlign: "right", fontSize: 12}}>
      <p>
        Made with React, Flask & SqlAlchemy. Hosted in GCP <br />
        https://github.com/josesolaro/Cvitae
      </p>
      </footer>
    </>
  );
}
export default ResumeComponent;
