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
import {Login} from "./officeLogin.js";
import Policies from "./Policies.js";
import FlagshipProjects from "./FlagshipProjects.js";
import OfficeOrders from "./OfficeOrders.js";

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
                <Route exact path="/officeLogin">
                    <Login />
                </Route>
                <Route exact path="/policies">
                    <Policies />
                </Route>
                <Route exact path="/flagship">
                    <FlagshipProjects />
                </Route>
                <Route exact path="/officeOrder">
                    <OfficeOrders />
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


