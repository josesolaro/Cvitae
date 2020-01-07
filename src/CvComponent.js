import React from "react";

function CvComponent(props) {
  const style = {
    hr: {
      marginRight: 0
    },
    contact: {
      img: {
        height: "18px",
        width: "18px"
      },
      data: {
        marginBottom: "20px",
        paddingRight: "2px"
      }
    },
    education: {
      marginBottom: 15,
      header: {
        fontWeight: "bold"
      }
    }
  };

  const contact = props.contact;
  const education = props.education;
  return (
    <>
      <section>
        <h3>Contact</h3>
        <hr style={style.hr} />
        <div style={{ marginTop: 0 }}>
          {contact.map(contact => (
            <div key={contact.key} style={style.contact.data}>
              <span>{contact.value}</span>
              <img
                src={"./images/" + contact.key + ".png"}
                alt={contact.key}
                style={style.contact.img}
              />
            </div>
          ))}
        </div>
      </section>
      <section>
        <h3>Education</h3>
        <hr style={style.hr} />
        {education.map(education => (
          <div key={education.degree} style={style.education}>
            <span style={style.education.header}>
              {education.degree} <br />
            </span>
            {education.institute} <br />
            {education.finishYear}
          </div>
        ))}
      </section>
    </>
  );
}

export default CvComponent;
