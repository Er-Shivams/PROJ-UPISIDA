import React from "react";

import './KeyCard.css';

const KeyCard= (props) =>{
    return (
      <div className="key-card">
        <img src={props.image} alt={props.name} />
        <h5>{props.name}</h5>
        <p>{props.description}</p>
      </div>
    );
};

export default KeyCard;