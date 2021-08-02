import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Body from "./Body";
import Investor from "./Investor"
import Background from "./components/Background.js";
import { jsx } from "@emotion/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  FooterContainer  from "./containers/footer";
import About from "./About.js"
import {EServices} from "./eServices.js"
import {Login} from "./officeLogin.js";
import Policies from "./Policies.js";
import FlagshipProjects from "./FlagshipProjects.js";
import OfficeOrders from "./OfficeOrders.js";
import LinkBar from './components/LinkBar';
import MainNavigation from './components/Navigation/MainNavigation';
const App = () => {
  
  return (
  
     <Router> 
     <CContainer>
            <MainNavigation />
              <Heading >
               <LinkBar/>
              </Heading>
             <Switch>
                <Route exact path="/" render={()=>{
                  return(
                          <>
                          <Background />
                          <Body />
                          <Investor/>
                          <FooterContainer 
                              title={["top",'Services','About','Important Links']}
                              link1={['Industrial Info','GIS','E-Services','Office Orders','Resource Centre','Available Plot']}
                              link2= {['Online Services','Track Application','News Letter','Investment Guide','Warehousing and Logistics']}
                              link3= {['UPSIDA','Policies']}
                              link4= {['Infrastructure & Industrial Devlopment Department','Goverment of Uttar Pradesh','Tenders Uttar Pradesh']}/>
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
             
                
            
        
    </CContainer>     
    </Router> 
    


    
  );
};

export default App;

const CContainer = styled.div`
 height: auto;
 width: auto;
 
`;

const Heading = styled.div`
    ${'' /* margin-top:4.2%; */}
    background-color:#F9FBFF;
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top:94px;
   
    
    
`
