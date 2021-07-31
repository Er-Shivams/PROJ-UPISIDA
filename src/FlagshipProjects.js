import React from 'react';
import Flagship from './components/Flagship';
import './FlagshipProjects.css';
import styled from "styled-components";
import LinkBar from './components/LinkBar';
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
      <div>
            <Heading >
               <LinkBar/>
            </Heading>
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
      </div>
    );
}

export default FlagshipProjects;

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