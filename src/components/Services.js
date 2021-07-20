import React from "react";
import OnlineS from "../assets/images/OnlineS.png"
import NewsL from "../assets/images/NewsL.png"
import TrackA from "../assets/images/TrackA.png"
import InvestG from "../assets/images/InvestG.png"
import Warehousing from "../assets/images/Warehousing.png"
import "./Services.css"

import Card from "../util/Card";

const Services= () =>{
    return (
      <div class="container">
        <Card
          image={OnlineS}
          name="Online Services"
        />
        <Card
          image={NewsL}
          name="Track Application"
        />
        <Card
          image={TrackA}
          name="News Letter"
        />
        <Card
          image={InvestG}
          name="Invest Guide"
        />
        <Card
          image={Warehousing}
          name="Warehousing & Logistics"
        />
      </div>
    );
};

export default Services;


