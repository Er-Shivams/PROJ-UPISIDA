import React from "react";

import './PolicyCard.css';

const PolicyCard= (props) =>{
    return (
      <div className="policy-card">
        <div className="imgCard-div">
          <img src={props.image} alt={props.name} />
          <p>{props.name}</p>
        </div>
        <div className="button-div">
          <button>View</button>
        </div>
      </div>
    );
};

export default PolicyCard;