import React from 'react'
import Footer from '../components/footer';
import image from '../containers/fimg.png'
import styled from "styled-components";
import image1 from '../containers/face.png'
import image2 from '../containers/twitter.png'
import {Link} from "react-router-dom";
function FooterContainer(props){
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                      
                        <Button> Office login</Button>
                        <Button>Web Mail</Button>
               
                        <img height="200" width="200" style={{marginTop:"15%"}} src={image}/>
                     

                    </Footer.Column>
                
                <Footer.Column>
                    
                    <Footer.Title>{props.title[0]}</Footer.Title>
                        {props.link1.map((link, index) =>
                            <Link key={index} to="/" style={{textDecoration:"none"}}><Footer.Link> {link}  </Footer.Link></Link>
                        )}
                           
                   
                    
                    {/* <Footer.Link href="#">GIS</Footer.Link> */}
                    {/* <Footer.Link href="#">E-Services</Footer.Link> */}
                    {/* <Footer.Link href="#">Office Orders</Footer.Link> */}
                    {/* <Footer.Link href="#">Resource Centre</Footer.Link> */}
                    {/* <Footer.Link href="#">Available Plot</Footer.Link> */}
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>{props.title[1]}</Footer.Title>
                    {props.link2.map((link, index) =>
                            <Link key={index} to="/" style={{textDecoration:"none"}}><Footer.Link> {link}  </Footer.Link></Link>
                        )}
                    {/* <Footer.Link href="#">Track Application</Footer.Link>
                    <Footer.Link href="#">News Letter</Footer.Link>
                    <Footer.Link href="#">Investment Guide</Footer.Link>
                    <Footer.Link href="#">Warehousing and Logistics</Footer.Link> */}
                    
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>{props.title[2]}</Footer.Title>
                    {props.link3.map((link, index) =>
                            <Link key={index} to="/" style={{textDecoration:"none"}}><Footer.Link> {link}  </Footer.Link></Link>
                        )}
                    {/* <Footer.Link href="#">Policies</Footer.Link> */}
                    
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>{props.title[3]}</Footer.Title>
                    {props.link4.map((link, index) =>
                            <Link key={index} to="/" style={{textDecoration:"none"}}><Footer.Link> {link}  </Footer.Link></Link>
                        )}
                    {/* <Footer.Link href="#">Government of Uttar Pradesh</Footer.Link>
                    <Footer.Link href="#">Tenders Uttar Pradesh</Footer.Link> */}
                    <Footer.Link ><h3>Follow us</h3></Footer.Link>
                    <Footer.Link><img style={{width:'40px'}} href="#" src={image1}/><img  style={{width: '30px'}} href="#" src={image2}/> </Footer.Link>
                </Footer.Column>
                
                </Footer.Row>
                <Footer.Base>
                
                <BottomText >Content on this website is published and managed by Uttar Pradesh State Industrial Development Authority.<br />
                   For any query regarding this website, please contact the "ADMINISTRATOR".<br />
                   @ UPSIDA, U.P., India | All rights reserved.
                </BottomText>
                
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


const BottomText = styled.p`
    color:white;
    font-family:sans-serif;
    font-size:15px;
    padding:15px 15px 0 15px;

    @media (min-width:300px) and (max-width:600px){
        font-size:10px;
  }
  @media (max-width:300px){
        font-size:8px;
  }
`;

