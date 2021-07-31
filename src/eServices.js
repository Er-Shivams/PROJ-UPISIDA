import React from 'react'
import styled from "styled-components";
import LinkBar from './components/LinkBar';
import "./eServices.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap'
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
                            <div className="options">
                                <Button  style={{width: "50%",backgroundColor: "#F3F6FA",border:"0"}}  variant="primary"  type="submit">
                                <p className="" style={{fontFamily:"inter", fontStyle:"normal", fontWeight:"bold", color:"black"}}>UPSIDA User</p></Button>
                                <Button  style={{width: "50%",backgroundColor: "#ffffff", border:"0"}}   type="submit">
                                <p style={{fontFamily:"inter", fontStyle:"normal", fontWeight:"bold", color:"black"}}>Other Dept </p></Button>
                            </div>
                            <Form>
                                <Form.Group className="mb-3 mt-5 mx-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter username" />
                                </Form.Group>

                                <Form.Group className="mb-3 mx-3" controlId="formBasicPassword">
                             
                                    <Form.Control type="password" placeholder="Enter Password" />
                                </Form.Group>
                                <Form.Group className="mb-3 mx-3" controlId="formBasicPassword">
                                   
                                    <Form.Control type="password" placeholder="Enter Captcha" />
                                </Form.Group>
                                
                                <Form.Group className="mb-3 mx-3" controlId="formBasicPassword">
                                    <img height="100" width="200" src="https://www.gdatasoftware.com/fileadmin/_processed_/f/4/G_DATA_Blog_CaptchaDissolve_Preview_52a6e13490.jpg" alt="Captcha"/>
                                </Form.Group>
                                <Button style={{width: "92%",backgroundColor: "#082A91"}} variant="primary"  type="submit">
                                    Login
                                </Button>
                                
                        </Form>
                    </div>    
                </div>
                
            </div>
            <div className="buttonDiv">
                <div className="buttonContainer">
                    <Button style={{backgroundColor:"#082A91"}}  className="groupButtons" variant="primary"  type="submit">
                        Application Under Warehousing & Logistic Policy 2018
                    </Button>
                    <Button  style={{backgroundColor:"#082A91"}}  className="groupButtons" variant="primary"  type="submit">
                        Apply for Occupancy Certificate 
                    </Button>
                    <Button  style={{backgroundColor:"#082A91"}} className="groupButtons" variant="primary"  type="submit">
                        Apply for Completion Certificate 
                    </Button>
                    
                </div>
                <div className="buttonContainer">
                    <Button style={{backgroundColor:"#082A91"}}  className="groupButtons" variant="primary"  type="submit">
                        Apply for Amalgamation of Plot
                    </Button>
                    <Button style={{backgroundColor:"#082A91"}}  className="groupButtons" variant="primary"  type="submit">
                        Apply for Subdivison of Plot
                    </Button>
                    
                </div>
                 <br />
                  <br />
                <hr />
                
                <div className="buttonContainer">
                    <Button style={{backgroundColor:"#082A91"}} className="groupButtons" variant="primary"  type="submit">
                        IA Service Tracker
                    </Button>
                    <Button style={{backgroundColor:"#082A91"}}  className="groupButtons" variant="primary"  type="submit">
                        Land Allotment Tracker
                    </Button>
                    <Button  style={{backgroundColor:"#082A91"}}  className="groupButtons" variant="primary"  type="submit">
                        Apply for RTI
                    </Button>
                    <Button style={{backgroundColor:"#082A91"}}  className="groupButtons" variant="primary"  type="submit">
                        Submit Grievance
                    </Button>
                    
                </div>
                <div className="buttonContainer">
                    <Button  style={{backgroundColor:"#082A91"}}  className="groupButtons" variant="primary"  type="submit">
                        Find Plot
                    </Button>
                    <Button style={{backgroundColor:"#082A91"}}  className="groupButtons" variant="primary"  type="submit">
                        Sell Your Land
                    </Button>
                    
                </div>
                
                
            </div>
            
            
            
        </div>
        
    )
}


const Heading = styled.div`
    margin-top:4.2%;
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
    margin-top:9%;
    margin-bottom:0;
    width: 100%;
    height:50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #E5FFE1;
    font-size:18px;
    position:relative;

`