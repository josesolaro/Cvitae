import React from "react";
function KnowledgeComponent(props) {
  const knowledge = props.knowledge;
  const styles = {
    container: {
      columns: 2,
    },
  };
  return (
    <>
      <div style={styles.container}>
        {knowledge.map((knowledge) => {
          return <li>{knowledge.description}</li>;
        })}
      </div>
    </>
  );
}

export default KnowledgeComponent;
