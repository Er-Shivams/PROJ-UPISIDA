import React from "react";
import PolicyComp from './components/PolicyComp.js';
import './Policies.css';
import styled from "styled-components";
import LinkBar from './components/LinkBar';
const IndustrialInvestment = [
  { image: "https://www.onlineupsidc.com/images/policy/p11.jpg", name: "Industrial Investment & Employment Promotion Policy of U.P. 2017 - (English)"},
  { image: "https://www.onlineupsidc.com/images/policy/p11.jpg", name: "Industrial Investment & Employment Promotion Policy of U.P. 2017 - (Hindi)"}
];

const WareHousing = [
  { image: "https://www.onlineupsidc.com/images/policy/Warehousingamendment.jpg", name: "Warehousing Policy and rules"},
  { image: "https://www.onlineupsidc.com/images/policy/IndustryStatustoWarehosuing.jpg", name: "Warehousing Amendment"},
  { image: "https://www.onlineupsidc.com/images/policy/25AcresWarehousing.jpg", name: "Warehouse and Logistic Policy Amendment"},
  {image: "https://www.onlineupsidc.com/images/policy/IndustryStatustoWarehosuing.jpg", name: "Industry Status to Warehousing"},
  {image: "https://www.onlineupsidc.com/images/policy/WarehousingPolicyandRules.jpg", name: "25 Acres Warehousing Order"}
];

const Textile = [
  { image: "https://www.onlineupsidc.com/images/policy/p-img-7.jpg", name: "U.P. Textile Policy 2014"},
  { image: "https://www.onlineupsidc.com/images/policy/p-img-8.jpg", name: "GO Realted Textile Policy 2014"}
];

const LandAcquisition= [
  { image: "https://www.onlineupsidc.com/images/policy/p-img-9.jpg", name: "Industrial Investment & Employment Promotion Policy of U.P. 2017 - (English)"},
  { image: "https://www.onlineupsidc.com/images/policy/p-img-10.jpg", name: "Industrial Investment & Employment Promotion Policy of U.P. 2017 - (Hindi)"}
];

const Electronics = [
  { image: "https://www.onlineupsidc.com/images/policy/p-img-11.jpg", name: "Industrial Investment & Employment Promotion Policy of U.P. 2017 - (English)"}
];

const ITstartup = [
  { image: "https://www.onlineupsidc.com/images/policy/p-img-13.jpg", name: "Industrial Investment & Employment Promotion Policy of U.P. 2017 - (English)"}
];

const FoodProcessing = [
  { image: "https://www.onlineupsidc.com/images/policy/p-img-15.jpg", name: "Industrial Investment & Employment Promotion Policy of U.P. 2017 - (English)"},
  { image: "https://www.onlineupsidc.com/images/policy/p-img-16.jpg", name: "Industrial Investment & Employment Promotion Policy of U.P. 2017 - (Hindi)"},
  { image: "https://www.onlineupsidc.com/images/policy/p-img-17.jpg", name: ""},
  { image: "https://www.onlineupsidc.com/images/policy/p-img-18.jpg", name: ""},
  { image: "https://www.onlineupsidc.com/images/policy/p-img-19.jpg", name: ""}
];

const SolarPower = [
  { image: "https://www.onlineupsidc.com/images/policy/p-img-20.jpg", name: "Industrial Investment & Employment Promotion Policy of U.P. 2017 - (English)"}
];

const PrivatePark = [
  { image: "https://www.onlineupsidc.com/images/policy/pp.jpg", name: "Industrial Investment & Employment Promotion Policy of U.P. 2017 - (English)"},
  { image: "https://www.onlineupsidc.com/images/policy/pp.jpg", name: "Industrial Investment & Employment Promotion Policy of U.P. 2017 - (Hindi)"}
];



const Policies = () =>{
    return (
      <div>
            <Heading >
               <LinkBar/>
            </Heading>
      <div className="policies">
         <div className="policy_header">
           <h1>Policies</h1>
         </div>
         <PolicyComp head="Industrial & Industrial Investment Policy" cards={IndustrialInvestment} />
         <PolicyComp head="U.P. Warehousing and Logistic Policy 2018, Policy Rules and Amendments" cards={WareHousing} />
         <PolicyComp head="Textile Policy" cards={Textile} />
         <PolicyComp head="Land Acquisition Policy" cards={LandAcquisition} />
         <PolicyComp head="UP Electronics Manufacturing Policy" cards={Electronics} />
         <PolicyComp head="Uttar Pradesh Information Technology & Startup Policy 2016" cards={ITstartup} />
         <PolicyComp head="Food Processing Industrial Policy - 2012" cards={FoodProcessing} />
         <PolicyComp head="Solar Power Policy - 2013" cards={SolarPower} />
         <PolicyComp head="Private Park Criteria Amendment & Scheme" cards={PrivatePark} />
      </div>
      </div>
    );
};

export default Policies;

const Heading = styled.div`
    margin-top:4.2%;
    background-color:#F9FBFF;
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
`