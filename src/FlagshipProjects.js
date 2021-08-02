import React from 'react';
import Flagship from './components/Flagship';
import './FlagshipProjects.css';
import  FooterContainer  from "./containers/footer";
const projectData = [
    {id: 1,district: 'Unnao', projectName: 'Trans Ganga Hi-Tech City', area: '1144.1'},
    {id: 2,district: 'Allahabad', projectName: 'Saraswati Hi-Tech City', area: '1138.78'},
    {id: 3,district: 'Auraiya', projectName: 'Dibiyapur Plastic Park', area: '367.73'},
    {id: 4,district: 'Kannauj', projectName: 'Perfume Park', area: '100'},
    {id: 5,district: 'Bareilly', projectName: 'Baheri Industrial Area', area: '251'},
    {id: 6,district: 'Ramaipur, Kanpur', projectName: 'Mega Leather Cluster (MLC) Project', area: '403'},
    {id: 7,district: 'Moradabad', projectName: 'Moradbad Special Economic Zone (SEZ)', area: '267'}
  ];

const FlagshipProjects = () =>{
    return (
      <>
      <div className="flag_project">
        <div className="flag_title">
            <h2>
                UPSIDA Flagship Projects
            </h2>
        </div>
        <hr />
        <hr />
        <div className="flag_table">
          <Flagship data={projectData} />
        </div>
        <div className="flag_title">
            <h2>Industrial Areas of UPSIDA</h2>
        </div>
        <hr style={{height: '2px',border:'#cac7c7 1px solid', backgroundColor:'#e9e7e7'}} />
      </div>
      <FooterContainer 
          title={['Land Allotment','UPSIDA','Security & Privacy','Public Forum']}
          link1={['Industrial Land Allotement Form','Checklist Document','Opening Manual 2011','SOP For Industrial Land Allotment']}
          link2= {['Annexure A, Inspection Procedure Checklist & Performa','Land Regulation 2004 after 26 UPSIDA','Building Regulation 2004 after 26 UPSIDA','UPSIDA Byelaws','SOP For Computerised Allocation of Inspectors']}
          link3= {['Terms Of Use','Privacy Policy','Return / Refund Policy','Store Locations']}
          link4= {['View Allotment Details','View Inspection Document','View BuildingPlan Document','View Service TimeLine']}/>
      </>
    );
}

export default FlagshipProjects;

