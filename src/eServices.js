import React from 'react'
import styled from "styled-components";
import Background from './components/Background';
import LinkBar from './components/LinkBar';
import "./eServices.css";
export const  EServices = () => {
    return (
        <div>

            
           <Heading >
               <LinkBar/>
           </Heading>
            
                <Para>
                <marquee>
               🔴 All the UPSIDA industrial area services will now available only through nivesh mitra portal.
                </marquee>
                </Para>
            
             <div className="img-div1">
                <div className="img-content1">
                <div className="Form">
                    <form>
                    <input type="text" className="Input" name="fname" placeholder="Enter username"></input>
                    <input type="text" className="Input" name="lname" placeholder="Enter Password"></input>
                    <input type="text" className="Input" name="lname" placeholder="Enter Captcha"></input>
                    <input type="submit" className="Input" value="Login"></input>
                    </form>
                </div>    
                </div>
             </div>
        </div>
        
    )
}


const Heading = styled.div`
    margin-top:5.4%;
    background-color:#F9FBFF;
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    
    
`

const Para = styled.h4`

    margin-top:10%;
    width: 100%;
    height:40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #E5FFE1;

`