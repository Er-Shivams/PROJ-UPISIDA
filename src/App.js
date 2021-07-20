import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Body from "./Body";
import Investor from "./Investor"
import Background from "./components/Background.js";
import { jsx } from "@emotion/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  FooterContainer  from "./containers/footer";
const App = () => {
  
  return (
  
    <CContainer>
             <Navbar />
             <Background />
             <Body />
             <Investor/>
             <FooterContainer/>
    </CContainer>
    


    
  );
};

export default App;

const CContainer = styled.div`
 height: auto;
 width: auto;


`;
// const Body = styled.div`
//   min-height:100vh;

  

// `;

// const Image1 = styled.section`
    
//    padding: 50px 0 50px 0 ;
//    margin-left: 15rem;
   
   
  
  
  
// `;

