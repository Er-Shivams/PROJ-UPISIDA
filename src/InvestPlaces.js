import React from 'react'
import "./investor.css"
function InvestPlaces(props) {
    return (
  


         
                <div className="cardImg" style={{backgroundImage: `url(${props.backImage})`}}>
                    <div className="faded"> 
                        {props.info}
                    </div>
               
                   {/* <div style={{ 
                    backgroundImage: `url(${props.backImage})`, 
                    backgroundRepeat: 'no-repeat',
                    width:"100vh", 
                    height:'100vh',
                    position:'absolute',
                    objectFit:"contain",
                    left:"100px",
                    }}>
          <div style={{
                    width:"17.85%",
                    height:"5%",
                    background: "rgba(0,0,0,0.4)",
                    backgroundRepeat: 'no-repeat',
                    backdropFilter: "blur(2px)",
                    marginTop:"7.5%", 
                    justifyContent:"center",
                    display:"flex", 
                    alignItems:"center",
                    borderBottomRightRadius:"10px",
                    borderBottomLeftRadius:"10px",
                    color:"#ffffff"
                    }}>
                    {props.name}
            
          </div>
        
          </div> */}
          </div>
         

    )
}

export default InvestPlaces
