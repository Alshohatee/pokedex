import React from "react";

function SubHeaderInfo(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <h4>{props.subTitle}</h4>
    </div>
  );
}
export default SubHeaderInfo;