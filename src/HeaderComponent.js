import React from "react";

function HeaderComponent(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <img
            src={"./images/" + props.data.name + ".png"}
            alt="Logo"
            height="240px"
            width="240px"
          />
        </div>
        <div className="col align-self-center">
          <h1 className="text-center">{props.data.name}</h1>
          <h2 className="text-center">{props.data.job}</h2>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
