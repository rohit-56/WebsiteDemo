import React from "react";
import image from "../../../images/backgroundImage.jpg";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt="image" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>

        <a href="/" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Card;
