import React from 'react'
import styled from "styled-components";
import {AboutContainer} from './containers/about'
import  FooterContainer  from "./containers/footer";

export const About = () =>{
    return(
        <>
        <AboutContainer/>
        <FooterContainer 
            title={['Top Catagories','Services','About','Important Links']}
            link1={['Industrial Info','GIS','E-Services','Office Orders','Resource Centre','Available Plot']}
            link2= {['Online Services','Track Application','News Letter','Investment Guide','Warehousing and Logistics']}
            link3= {['UPSIDA','Policies']}
            link4= {['Infrastructure & Industrial Devlopment Department','Goverment of Uttar Pradesh','Tenders Uttar Pradesh']}/>
        </>
    )    
    
} 
