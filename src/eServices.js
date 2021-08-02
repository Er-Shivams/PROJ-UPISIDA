import React from 'react'
import styled from "styled-components";
import "./eServices.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap'
import  FooterContainer  from "./containers/footer";
export const  EServices = () => {
    return (
        <>

            
           
            
                <Para>
                <marquee>
               🔴 All the UPSIDA industrial area services will now available only through nivesh mitra portal.
                </marquee>
                </Para>
            
            <div className="img-div1">
                {/* <div className="img-content1"> */}
                    <div className="main_Form">
                            <div className="options">
                                <Button  style={{width: "50%",backgroundColor: "#F3F6FA",border:"0"}}  variant="primary"  type="submit">
                                <p className="" style={{fontFamily:"inter", fontStyle:"normal", fontWeight:"bold", color:"black"}}>UPSIDA User</p></Button>
                                <Button  style={{width: "50%",backgroundColor: "#ffffff", border:"0"}}   type="submit">
                                <p style={{fontFamily:"inter", fontStyle:"normal", fontWeight:"bold", color:"black"}}>Other Dept </p></Button>
                            </div>
                            <Form classNam="login_form">
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
                                <Button style={{width: "92%", marginRight:"15px",backgroundColor: "#082A91"}} variant="primary"  type="submit">
                                    Login
                                </Button>
                                
                        </Form>
                    {/* </div>     */}
                </div>
                
            </div>
            <div className="buttonDiv">
                <div className="buttonContainer">
                    <Button style={{backgroundColor:"#082A91"}}  className="groupButtons" variant="primary"  type="submit">
                        Application Under Warehousing...
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
            <FooterContainer 
                title={['Land Allotment','UPSIDA','Security & Privacy','Public Forum']}
                link1={['Industrial Land Allotement Form','Checklist Document','Opening Manual 2011','SOP For Industrial Land Allotment']}
                link2= {['Annexure A, Inspection Procedure Checklist & Performa','Land Regulation 2004 after 26 UPSIDA','Building Regulation 2004 after 26 UPSIDA','UPSIDA Byelaws','SOP For Computerised Allocation of Inspectors']}
                link3= {['Terms Of Use','Privacy Policy','Return / Refund Policy','Store Locations']}
                link4= {['View Allotment Details','View Inspection Document','View BuildingPlan Document','View Service TimeLine']}/>
                          
            
            
        </>
        
    )
}


const Para = styled.h4`
    margin-top:180px;
    margin-bottom:0;
    width: 100%;
    height:40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #E5FFE1;
    font-size:18px;
    position:relative;

`