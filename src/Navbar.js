import React, { useState } from "react";
import styled from "styled-components";
import logo from "./assets/images/upsida_logo.png";
import About from "./About.js"
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
        <MenuLink href="">Home</MenuLink>
        <MenuLink href="">About</MenuLink>
        <MenuLink href="">Contact Us</MenuLink>                
        <MenuLink href="">Web Mail</MenuLink>
        <MenuLink href=""><Button> Office Login </Button></MenuLink>
        
       
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
  border-radius: 10px;
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
    ${'' /* padding: 1rem 1rem; */}
   
  }
`;
const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${'' /* position: relative; */}
  ${'' /* margin-right: 4rem; */}
  @media (max-width: 1424px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "450px" : 0)};
    transition: max-height 0.3s ease-in;
 
  }
`;

const Nav = styled.div`
  padding: 0 2rem;
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
  ${'' /* width: 100%; */}
`;


const Logo = styled.a`
  ${'' /* font-size: 1.7rem; */}
  margin-left: 5rem;
  ${'' /* object-fit: contain; */}
  ${'' /* width: 10px; */}
  ${'' /* border-width: 10px;
  border-style: solid; */}
  ${'' /* padding: 2rem; */}
  ${'' /* padding: 0 2rem; */}
  
   @media (max-width: 1424px) {
    display: flex;
    margin-left:0;
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
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 1424px) {
    display: flex;
  }
    @media (max-width: 624px) {
      margin: 4rem auto 0 auto ;

   }
`;