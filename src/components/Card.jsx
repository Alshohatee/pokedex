import React from "react";

function Card(props) {
  return (
    <div
      className="pokemon-item"
      onClick={(e) => {
        props.onClick
          ? props.onClick([
              {
                id: props.id,
                name: props.name,
                imgUrl: props.imgUrl,
                HP: props.HP,
                ATK: props.ATK,
              },
            ])
          : e.preventDefault();
      }}
    >
      <img src={props.imgUrl} alt={props.a} />
      <p> {props.name}</p>
      <p>{`HP: ${props.HP}   ATK: ${props.ATK}`}</p>
    </div>
  );
}
export default Card;
