import React from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col
} from 'reactstrap';
import image1 from "./assets/images/image1.png";
import image2 from "./assets/images/image2.png";
import image3 from "./assets/images/image3.png";
import image4 from "./assets/images/image4.png";
import image5 from "./assets/images/image5.png";
import image6 from "./assets/images/image6.png";
import InvestPlaces from "./InvestPlaces";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "./investor.css"

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
// }));
function Investor() {
    // const classes = useStyles();
    return (
        // height:"1000px", width:"100%"
        <div className="main">
                                    <div className="text-main">
                                        <h2>Investor friendly Reforms </h2>
                                        <p > Promoting Industrial Progress with a plethora of investor friendly reforms </p>
                                    </div>
                                <div className="main1">
                                <div className="alert">
                                    <div className="news_tendor">
                                   
                                            <p >Newsletter</p>
                                         
                                            
                                                        <a href="#link1" className="Links">Link1
                                                        <span>Date : 01/07/2020</span></a>
                                                        <hr />
                                                        <a href="#link1" className="Links">Link1
                                                        <span>Date : 01/07/2020</span></a>
                                                        
                                                        
                                                        
                                     
                                    </div>
                                    <div className="news_tendor">
                                   
                                            <p >News and Tenders</p>
                                           
                                                   
                                                        <a href="#link1" className="Links">Link1
                                                        <span>Date : 01/07/2020</span></a>
                                                        <hr />
                                                        <a href="#link1" className="Links">Link1
                                                        <span>Date : 01/07/2020</span></a>
                                                        <hr />
                                                        <a href="#link1" className="Links">Link1
                                                        <span>Date : 01/07/2020</span></a>
                                                        <hr />
                                                        <a href="#link1" className="Links">Link1
                                                        <span>Date : 01/07/2020</span></a>
                                                      
                                                        
                                                

                                       
                                            
                                    </div>
                                </div>
                                    <div className="Container">
                                            <div className="cardImg">
                                                <div className="faded"> 
                                                    Trans Ganga City, UNNAO
                                                </div>
                                            </div>
                                            <div className="cardImg">
                                                <div className="faded"> 
                                                    Trans Ganga City, UNNAO
                                                </div>
                                            </div>
                                            <div className="cardImg">
                                                <div className="faded"> 
                                                    Trans Ganga City, UNNAO
                                                </div>
                                            </div>
                                            <div className="cardImg">
                                                <div className="faded"> 
                                                    Trans Ganga City, UNNAO
                                                </div>
                                            </div>
                                            <div className="cardImg">
                                                <div className="faded"> 
                                                    Trans Ganga City, UNNAO
                                                </div>
                                            </div>
                                            <div className="cardImg">
                                                <div className="faded"> 
                                                    Trans Ganga City, UNNAO
                                                </div>
                                            </div>
                    
                                    </div>
                                 </div>   
                                {/* <div className="img-container">

                                    <div className="content">
                                      <InvestPlaces  name="Trans Ganga City, UNNAO" backImage={image1}/>
                                    </div>

                                </div> */}
                    
                               


                            {/* <div style={{margin:"10% 0 0 10% "}}>

                         
                               <Grid container spacing={6}>
                                    <Grid item sm={4}>
                                    <div style={{width:"60%",height:"auto", margin:"0 0 0 40%",}}>
                                   
                                            <p style={{ borderTopLeftRadius:"10px", borderTopRightRadius:"10px",padding:"10px", textAlign:"center", color:"white",backgroundColor:"#082A91",}}>Newsletter</p>
                                            <div style={{height:"auto",backgroundColor:"white"}}>
                                            
                                                        <a href="#link1" className="">Link1<br/></a>
                                                        <a href="#link1" className="">Link1<br/></a>
                                                        <a href="#link1" className="">Link1<br/></a>
                                                        <a href="#link1" className="">Link1<br/></a>
                                                        <a href="#link1" className="">Link1<br/></a>
                                                        
                                                
                                            </div>
                                            
                                    </div>
                                    </Grid>
                             

                               
                                        <Grid  item sm={3}>
                                            <InvestPlaces  name="Trans Ganga City, UNNAO" backImage={image1}/>
                                        </Grid>
                                        <Grid  item sm={3}>
                                            <InvestPlaces name="Plastic City, AURAIA" backImage={image2}/>
                                        </Grid>
                            
                                </Grid>
                               </div>
                               <div style={{margin:"5% 0 0 10% "}}>

                         
                               <Grid container spacing={6}>
                                    <Grid item sm={4}>
                                    <div style={{width:"60%",height:"auto", margin:"0 0 0 40%",}}>
                                
                                            <p style={{ borderTopLeftRadius:"10px", borderTopRightRadius:"10px",padding:"10px", textAlign:"center", color:"white",backgroundColor:"#082A91",}}>News and Tenders</p>
                                            <div style={{backgroundColor:"white"}}>
                            
                                                        <a href="#link1" className="">Link1<br/></a>
                                                        <a href="#link1" className="">Link1<br/></a>
                                                        <a href="#link1" className="">Link1<br/></a>
                                                        <a href="#link1" className="">Link1<br/></a>
                                                        <a href="#link1" className="">Link1<br/></a>
                                                        <a href="#link1" className="">Link1<br/></a>
                                    
                                            </div>
                                            
                                    </div>
                                    </Grid>
                             
                                    
                                      
                                        <Grid  item sm={3}>
                                            <InvestPlaces name="Saraswati HI-TECH city, Allahabad" backImage={image3}/>
                                        </Grid>
                                        <Grid  item sm={3}>
                                            <InvestPlaces name="Trans Delhi Signature City(Gaziabad)" backImage={image4}/>
                                        </Grid>
                                   
                                        
                            
                                </Grid>
                               </div>
                               <div style={{margin:"4% 0 0 10% "}}>

                         
                               <Grid container spacing={6}>
                                    <Grid item sm={4}>
                                   
                                    </Grid>
                             

                                      
                                        <Grid  item sm={3}>
                                            <InvestPlaces name="Amritsar Kolkata Industrial Corridor" backImage={image5}/>
                                        </Grid>
                                        <Grid  item sm={3}>
                                           <InvestPlaces name="Perfume Park, Kannauj" backImage={image6}/>
                                        </Grid>
                                   
                                        
                            
                                </Grid>
                               </div>

                                    */}



              </div>
    )
}

export default Investor;



