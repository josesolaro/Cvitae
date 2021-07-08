import React, { useEffect, useState } from "react";
import HeaderComponent from "./HeaderComponent";
import CvComponent from "./CvComponent";
import ResumeComponent from "./ResumeComponent";
import axios from "axios";

const { apiUrl } = window["runConfig"];
function MainComponent(props) {
  const [contact, setContact] = useState([]);
  const [education, setEducation] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [personal, setPersonal] = useState({});
  const [profile, setProfile] = useState(null);
  const [knowledge, setKnowledge] = useState([]);

  useEffect(() => {
    axios.get(apiUrl).then((resp) => parseData(resp.data));
  }, []);

  const parseData = (data) => {
    setContact([
      { key: "phone", value: data.phone },
      { key: "email", value: data.email },
      { key: "linkedin", value: data.linkedin },
      { key: "github", value: data.github },
      { key: "location", value: data.location },
    ]);

    const dataEducation = data.education.map((education) => {
      return {
        institute: education.institute,
        finishYear: new Date(education.finish_year).getUTCFullYear(),
        degree: education.degree,
      };
    });
    dataEducation.sort((a, b) => (a.finishYear > b.finishYear ? -1 : 0));
    setEducation(dataEducation);

    const dataExperience = data.experience.map((experience) => {
      return {
        company: experience.company,
        from: `${new Date(experience.job_from).getFullYear()}`+"-"+`${new Date(experience.job_from).getMonth()+1}`.padStart(2, '0'),
        position: experience.job,
        to: experience.job_to
          ? `${new Date(experience.job_to).getFullYear()}`+"-"+`${new Date(experience.job_to).getMonth()+1}`.padStart(2, '0')
          : "Currently",
        description: experience.description,
      };
    });
    dataExperience.sort((a, b) => (a.from > b.from ? -1 : 0));
    setExperiences(dataExperience);

    const dataKnowledge = data.knowledge;
    setKnowledge(dataKnowledge);

    setPersonal({ name: data.name, job: data.job });
    setProfile(data.profile_description);
  };
  return (
    <>
      <HeaderComponent data={personal} />
      <div style={{ marginTop: "30px" }}>
        <div className="cvComponent">
          <CvComponent contact={contact} education={education} />
        </div>
        <div className="resumenComponent">
          <ResumeComponent
            experiences={experiences}
            profile={profile}
            knowledge={knowledge}
          />
        </div>
      </div>
    </>
  );
}

export default MainComponent;
