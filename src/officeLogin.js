import React from 'react'
import styled from "styled-components";
import LinkBar from './components/LinkBar';
import {Form, Button} from 'react-bootstrap'
import "./officeLogin.css";
import {Link} from "react-router-dom";
import  FooterContainer  from "./containers/footer";
export const Login = () =>  {
    return (
        <>
                <div className="img-div2">
                    <div className="img-content2">
                            <div className="d-flex justify-content-center mt-4">
                                    <h3>Office Login</h3>
                            </div>
                            <div>
                                    <Form>
                                <Form.Group className="mb-3 mt-5 mx-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter username" />
                                </Form.Group>
                                <Form.Group className="mb-3 mx-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Enter Password" />
                                </Form.Group>
                                <Link><a className="mx-4 position-relative text-muted"> forget password? </a></Link>
                                <Button style={{backgroundColor: "#082A91",width:"92%"}} className="my-4 mx-3" variant="primary"  type="submit">
                                    Login
                                </Button>
                                
                        </Form>
                            </div>
                                
                    </div>
                </div>
                <FooterContainer 
                    title={['Top Catagories','Services','About','Important Links']}
                    link1={['Industrial Info','GIS','E-Services','Office Orders','Resource Centre','Available Plot']}
                    link2= {['Online Services','Track Application','News Letter','Investment Guide','Warehousing and Logistics']}
                    link3= {['UPSIDA','Policies']}
                    link4= {['Infrastructure & Industrial Devlopment Department','Goverment of Uttar Pradesh','Tenders Uttar Pradesh']}/>
                
        </>
    )
}




