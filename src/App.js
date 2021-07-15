import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Body from "./Body";
// import image1 from "./bg-boost-desktop.svg";
import Card from "./Card";


const App = () => {
  return (
    <Container>
  
             <Navbar />
             <Body />
        
         
    </Container>
  );
};

export default App;

const Container = styled.div`
  background: #082A91;
  height: 100vh;
`;

// const Image1 = styled.section`
    
//    padding: 50px 0 50px 0 ;
//    margin-left: 15rem;
   
   
  
  
  
// `;