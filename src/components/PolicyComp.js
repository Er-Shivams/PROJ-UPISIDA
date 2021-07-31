import React from "react";

import PolicyCard from "../util/PolicyCard";
import './PolicyComp.css';

const PolicyComp = props =>{
    return (
        <div className="policy_comp">
           <div className="policy_head">
              <h1>{props.head}</h1>
           </div>
           <div className="pol_card">
           {props.cards.map(card =>{
               return(
                   <PolicyCard image={card.image} name={card.name} />
               )
           })}
           </div>
        </div>
    )
}

export default PolicyComp;