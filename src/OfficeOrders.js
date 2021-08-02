import React from 'react';
import OrderTable from './components/OrderTable';
import './OfficeOrders.css';
import styled from "styled-components";
import LinkBar from './components/LinkBar';
import  FooterContainer  from "./containers/footer";
const data= [
  {id: 1, ref_no: "4027-34/sida/estt", category: "Office orders", year: "2020", date: "22/12/2020", section: "EstablishmentI", subject: "In reference to addressing of letters/papers;", description: "Establishment Section", download: "View/Download"},
  {id: 2, ref_no: "671/674/SIDC/IA/Policy vol-17", category: "Office orders", year: "2017", date: "14/06/2017", section: "UPSIDA", subject: "Land allotment policy EODB", description: "MD", download: "View/Download"}
  ];

const OfficeOrders = () =>{
    return (
      <>
      <div className="office_order">
        <div className="order_title">
          <h2> UPSIDA Office Orders</h2>
        </div>
        <hr style={{ border: "#cac7c7 2px solid" }} />
        <div className="order_search">
          <div className="office_button">
            <button>Copy to clipboard</button>
            <button>Export to Excel</button>
            <button>Export to CSV</button>
            <button>Export to PDF</button>
          </div>
          <div className="search_bar">
          
            <input  type="text" value="" placeholder="Search"/>
          </div>  
        </div>
        <div className="order_table">
          <OrderTable data={data} />
        </div>
        <div className="order_search">
          <div>
            <p>Showing 1 to 2 of two entries</p>
          </div>
          <div className="prev_next">
            <p>Previous</p>
            <button >2</button>
            <p>Next</p>
          </div>
        </div>
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

export default OfficeOrders;

