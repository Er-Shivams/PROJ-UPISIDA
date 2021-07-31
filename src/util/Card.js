import React from "react";
import Avatar from "./Avatar";
import "./Card.css";

const Card = (props) => {
  return (
      <div class="card1">
        <div className="card-image">
          <Avatar
            image={props.image}
            alt="Image not found"
          />
        </div>
        <div className="card-info">
          <p>{props.name}</p>
        </div>
      </div>
  );
};

export default Card;
/* Rectangle 26 */
