import React from 'react'
import image1 from "./assets/images/image1.png";
import image2 from "./assets/images/image2.png";
import image3 from "./assets/images/image3.png";
import image4 from "./assets/images/image4.png";
import image5 from "./assets/images/image5.png";
import image6 from "./assets/images/image6.png";
import InvestPlaces from "./InvestPlaces";
import "./investor.css"


function Investor() {
    return (
       
        <div className="main">
                                    <div className="text-main">
                                        <h2>Investor friendly Reforms </h2>
                                        <p > Promoting Industrial Progress with a plethora of investor friendly reforms </p>
                                    </div>
                                <div className="main1">
                                <div className="alert">
                                    <div className="news_tendor">
                                            <p >Newsletter</p>
                                            <a href="#link1" className="Links">News letter(Edition-1)
                                            <span>Date : 01/07/2020</span></a>
                                            <hr />
                                            <a href="#link1" className="Links">News letter(Edition-2)
                                            <span>Date : 15/09/2020</span></a>
                                    </div>
                                    <div className="news_tendor">
                                            <p >News and Tenders</p>
                                            <a href="#link1" className="Links">News (Edition-1)
                                            <span>Date : 01/07/2020</span></a>
                                            <hr />
                                            <a href="#link1" className="Links">News (Edition-2)
                                            <span>Date : 15/09/2020</span></a>
                                            <hr />
                                            <a href="#link1" className="Links">News (Edition-3)
                                            <span>Date : 15/09/2020</span></a>
                                            <hr />
                                            <a href="#link1" className="Links">Link4
                                            <span>Date : 01/07/2020</span></a>
                                    </div>
                                </div>
                                
                                
                                    <div className="Container">
                                        <InvestPlaces info="Trans Ganga City, UNNAO" backImage={image1}/>
                                        <InvestPlaces info="Plastic City, AURAIA" backImage={image2}/>
                                        <InvestPlaces info="Saraswati HI-TECH city, Allahabad" backImage={image3}/>
                                        <InvestPlaces info="Trans Delhi Signature City(Gaziabad)" backImage={image4}/>
                                        <InvestPlaces info="Amritsar Kolkata Industrial Corridor" backImage={image5}/>
                                        <InvestPlaces info="Perfume Park, Kannauj" backImage={image6}/>
                                    </div>
                                 </div>   
              </div>
    )
}

export default Investor;



