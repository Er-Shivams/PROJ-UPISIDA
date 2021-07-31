import styled from 'styled-components'

export const Container = styled.div`
 width:100%;
 top: 0;
 position:sticky;

`


  
export const Wrapper = styled.div`
display: flex;
flex-direction : column;
max-width: 3000px;
margin: auto;
height: auto;
justify-content: column;





`

// radial-gradient(circle, rgba(0, 0, 255, 1 ) 0%, rgba(0, 0, 255, 1) 100% , width=1440)
export const Base = styled.div`
background-color: #082A91;
width: 100%;     
height: 100px;
align-items: center;
display: flex;
font-weight: bold;
font-size: 14px;

@media only screen and (max-width: 600px){
    padding-top: 40px;
    padding-bottom: 20px
}

`



export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`

export const Row = styled.div`
 display: grid;
 justify-content: center;
 grid-template-column: repeat(auto-fill, minmax(250px, 1fr));
 grid-gap: 100px;
 width: 100%;
 margin: 50px auto 50px 0;


 @media (max-width: 3000px) {
     grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
 }
 @media (max-width:1200px){
     margin: 0 0 0 0;
     
     
 }
`

export const Link = styled.div`
 color: #000000;
 margin-bottom: 20px;
 font-size: 18px;
 text-decoration: none;
 &:hover {
     color: #ff9c00;
     transition: 200ms ease-in;
 }
`

export const Title = styled.div`
 font-size: 24px;
 color: #000000;
 margin-bottom: 40px;
 font-weight: bold;
`