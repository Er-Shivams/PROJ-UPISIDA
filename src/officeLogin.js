import React from 'react'
import styled from "styled-components";
import LinkBar from './components/LinkBar';
import {Form, Button} from 'react-bootstrap'
import "./officeLogin.css";
import {Link} from "react-router-dom";
export const Login = () =>  {
    return (
        <div>
                <Heading >
                    <LinkBar/>
                </Heading>
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
        </div>
    )
}

const Heading = styled.div`
    margin-top:4.1%;
    background-color:#F9FBFF;
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    
    
    
`

const Para = styled.h4`
    margin-top:9%;
    width: 100%;
    height:40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #E5FFE1;
    font-size:18px;

`

