import React from "react";

function Info(props) {
  return (
    <div class>
      <h5> {props.title}</h5>
      <video className="info-img" autoplay="autoplay">
        {" "}
        <source src={props.imgUrl} />{" "}
      </video>
    </div>
  );
}

export default Info;
