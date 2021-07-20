import React from 'react'
import Footer from '../components/footer';
import image from '../containers/fimg.png'
import styled from "styled-components";
function FooterContainer(){
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                      
                        
                        <Button> Office login</Button>
                        <Button>Web Mail</Button>
               
                    <img height="200" width="200" style={{marginTop:"15%"}} src={image}/>
                     

                    </Footer.Column>
                    
                    {/* paddingLeft: "5%", */}
                
                <Footer.Column >
                    <Footer.Title>Top Categories</Footer.Title>
                    <Footer.Link href="#">industrial info</Footer.Link>
                    <Footer.Link href="#">GIS</Footer.Link>
                    <Footer.Link href="#">E-Services</Footer.Link>
                    <Footer.Link href="#">Office Orders</Footer.Link>
                    <Footer.Link href="#">Resource Centre</Footer.Link>
                    <Footer.Link href="#">Available Plot</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="#">Online Services</Footer.Link>
                    <Footer.Link href="#">Track Application</Footer.Link>
                    <Footer.Link href="#">News Letter</Footer.Link>
                    <Footer.Link href="#">Investment Guide</Footer.Link>
                    <Footer.Link href="#">Warehousing and Logistics</Footer.Link>
                    
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>About</Footer.Title>
                    <Footer.Link href="#">UPSIDA</Footer.Link>
                    <Footer.Link href="#">Policies</Footer.Link>
                    
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Important Links</Footer.Title>
                    <Footer.Link href="#">INFRASTRUCTURE & INDUSTRIAL DEVELOPMENT DEPARTMENT</Footer.Link>
                    <Footer.Link href="#">Government of Uttar Pradesh</Footer.Link>
                    <Footer.Link href="#">Tenders Uttar Pradesh</Footer.Link>
                    
                </Footer.Column>
                </Footer.Row>
                <Footer.Base>
                
                <p style={{color:"white",fontFamily:"sans-serif",fontsize:"20px",paddingLeft:'20px'}}>Content on this website is published and managed by Uttar Pradesh State Industrial Development Authority.<br />
                   For any query regarding this website, please contact the "ADMINISTRATOR".<br />
                   @ UPSIDA, U.P., India | All rights reserved.
                </p>
                
            </Footer.Base>
            </Footer.Wrapper>
            
        </Footer>
       
    )
}

export default FooterContainer;


const Button = styled.div`
    display: flex;
    max-width: 236px;
    height: 42px;
    width: 236px;
    border-radius: 5px;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.10000000149011612);
    background-color: rgba(8, 42, 145, 1);
    font-weight:bold;
    color:white;
    align-items:center;
    margin-right: 5px;
    justify-content:center;
    margin-top: 20px;
    cursor: pointer;
    &:hover {
    box-shadow: inset 300px 0 0 0 blue;
    cursor: pointer;
    
  }
`;
