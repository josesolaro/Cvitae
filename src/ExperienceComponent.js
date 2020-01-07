import React from "react";
function ExperienceComponent(props) {
  const experience = props.experience;
  const style = {
    date: {
      fontStyle: "italic",
      fontSize: 12,
      marginTop: "0px"
    },
    company: {
      marginBottom: 0
    },
    position: {
      fontWeight: "bold",
      fontStyle: "italic",
      fontSize: 20,
      marginBottom: 0
    }
  };
  return (
    <>
      <p style={style.position}>{experience.position}</p>
      <p style={style.company}>
        {experience.company}
        {" | "}
        <span style={style.date}>
          {experience.from} - {experience.to}
        </span>
      </p>
      <div dangerouslySetInnerHTML={{ __html: experience.description }} />
    </>
  );
}

export default ExperienceComponent;
