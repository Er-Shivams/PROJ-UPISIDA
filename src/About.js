import React from 'react'
import styled from "styled-components";
import {AboutContainer} from './containers/about'
import LinkBar from './components/LinkBar';
export const About = () => {
    return (
        <div>
            <Heading >
               <LinkBar/>
            </Heading>
            <AboutContainer/>
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