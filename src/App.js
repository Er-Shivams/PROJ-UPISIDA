import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Body from "./Body";
import Investor from "./Investor"
import Background from "./components/Background.js";
import { jsx } from "@emotion/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  FooterContainer  from "./containers/footer";
import {About} from "./About.js"
import {EServices} from "./eServices.js"
// import LinkBar from "./components/LinkBar";
const App = () => {
  
  return (
  
     <Router> 
     <CContainer>
   

            <Navbar />
           
             <Switch>
                <Route exact path="/" render={()=>{
                  return(<>
                          
                          <Background />
                          <Body />
                          <Investor/>
                          
                          </>
                        )}}>
                </Route>
                <Route exact path="/about">
                  <About />
                </Route>
                <Route exact path="/eservices">
                  <EServices />
                </Route>
            </Switch>
             
        <FooterContainer/>
    </CContainer>     
    </Router> 
    


    
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

