import React from "react";

function Card(props) {
  return (
    <div
      id="pokemon-item"
      onClick={(e) => {
        {
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
        }
      }}
    >
      <img src={props.imgUrl} />
      <p> {props.name}</p>
      <p>{`HP: ${props.HP}   ATK: ${props.ATK}`}</p>
    </div>
  );
}
export default Card;
