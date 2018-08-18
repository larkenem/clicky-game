import React from "react";
import "../Card/Card.css";

const Card = props => (
  <div onClick={() => props.Clicked(props.id)} className="card">
    <div className="img-container">
      <img className= "responsive-img" alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Card;