import React, { useState } from "react";
import styled from "styled-components";
import logo from "./assets/images/upsida_logo.png";
import {Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    
    <Nav >
      
    <Logo href="./About.js">  <img src={logo} alt = "Logo"/> </Logo>
   
     
      <Tiles onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Tiles>
      
      <Menu isOpen={isOpen}>
        <Link to="/"><MenuLink to="">Home</MenuLink></Link>
        <Link to="/about"> <MenuLink >About</MenuLink></Link>
        <Link><MenuLink to="">Contact Us</MenuLink></Link>                
        <Link ><MenuLink to="">Web Mail</MenuLink></Link>
        <Link to="/officeLogin"><MenuLink><Button> Office Login </Button></MenuLink></Link>
      </Menu>
    </Nav>
         
            
     
  
  );
};

export default Navbar;


const Button = styled.button`
  cursor: pointer;
  background: #082A91;
  color: white;
  font-weight: bold;
  font-size: 0.9em;
  width:8rem;
  height:2.5rem;
  border-radius:3px;
  &:hover {
    color: #35323e;
  }
`;

const MenuLink = styled.a`
  padding: 2rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #bfbfbf;
  transition: all 0.3s ease-in;
  font-size: 1rem;
  font-weight: bold;
  font-family: Poppins;
  &:hover {
    color: #35323e;
  }
   @media (max-width: 768px) {
    color: #bfbfbf;
   
  }
`;
const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1424px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "450px" : 0)};
    transition: max-height 0.3s ease-in;
 
  }
`;

const Nav = styled.div`
  padding: 24px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #F3F6FA;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  border-width: 10px;
  
`;


const Logo = styled.a`

  margin-left: 5rem; 
  @media (max-width: 1424px) {
    display: flex;
    margin-left:0;
    margin-top:0;
    height: 3rem;
    width: 3rem;
  }
  @media (max-width: 624px) {

      height: 2rem;
      width: 2rem;  

   }

 
`;



const Tiles = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: -15px;
    border-radius: 5px;
  }
  @media (max-width: 1424px) {
    display: flex;
  }
    @media (max-width: 624px) {
      padding-bottom: 35px;

   }
`;