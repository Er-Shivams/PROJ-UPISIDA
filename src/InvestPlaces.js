import React from 'react'
import "./investor.css"
function InvestPlaces(props) {
    return (
  


         
                <div className="cardImg" style={{backgroundImage: `url(${props.backImage})`}}>
                    <div className="faded"> 
                        {props.info} 
                    </div>
               
                  
          </div>
         

    )
}

export default InvestPlaces
