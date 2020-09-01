import React from "react";

function Card(props) {
  return (
    <div
      id="pokemon-item"
      onClick={() => {
        props.onClick([
          {
            id: props.id,
            name: props.name,
            imgUrl: props.imgUrl,
            HP: props.HP,
            ATK: props.ATK,
          },
        ]);
      }}
    >
      <img src={props.imgUrl} />
      <p> {props.name}</p>
      <p>{`HP: ${props.HP}   ATK: ${props.ATK}`}</p>
    </div>
  );
}
export default Card;
