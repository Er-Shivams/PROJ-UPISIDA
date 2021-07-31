import React from 'react';
import OrderTable from './components/OrderTable';
import './OfficeOrders.css';
import styled from "styled-components";
import LinkBar from './components/LinkBar';
const data= [
  {id: 1, ref_no: "4027-34/sida/estt", category: "Office orders", year: "2020", date: "22/12/2020", section: "EstablishmentI", subject: "In reference to addressing of letters/papers; ACEO Shri Rajesh Kumar Rai &amp;amp;ACEO Ms. Neha Jha", description: "Establishment Section", download: "View/Download"},
  {id: 2, ref_no: "671/674/SIDC/IA/Policy vol-17", category: "Office orders", year: "2017", date: "14/06/2017", section: "UPSIDA", subject: "Land allotment policy EODB", description: "MD", download: "View/Download"}
  ];

const OfficeOrders = () =>{
    return (
      <div>
            <Heading >
               <LinkBar/>
           </Heading>
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
            <h3>Search:</h3>
            <input  type="text" value="" />
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
      </div>
    );
}

export default OfficeOrders;

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