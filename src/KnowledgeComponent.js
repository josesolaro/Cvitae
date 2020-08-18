import React from "react";
function KnowledgeComponent(props) {
  const knowledge = props.knowledge;
  return (
    <>
      <ul>
        {knowledge.map((knowledge) => (
          <li>{knowledge.description}</li>
        ))}
      </ul>
    </>
  );
}

export default KnowledgeComponent;
