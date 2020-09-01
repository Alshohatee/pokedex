import React from "react";

function Card(props) {
  return (
    <div id="pokemon-item">
      <img src={props.imgUrl} />
      <p> {props.name}</p>
      <p>{`HP: ${props.HP}   ATK: ${props.ATK}`}</p>
    </div>
  );
}
export default Card;
