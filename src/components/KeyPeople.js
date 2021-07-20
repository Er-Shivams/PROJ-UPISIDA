import React from "react";
import './KeyPeople.css';
import KeyCard from '../util/KeyCard';


import image from '../assets/images/yogiji.png';
import SatishSir from '../assets/images/SatishSir.png';
import SanjeevSir from '../assets/images/SanjeevSir.png';
import ArvindSir from '../assets/images/ArvindSir.png';
import MayurSir from '../assets/images/MayurSir.png';

const KeyPeople=() =>{
    return (
      <div className="main-div">
        <div className="key-people">
          <KeyCard
            image={image}
            name="Yogi AdityaNath"
            description="Hon'ble Chief Minister, Uttar Pradesh"
          />
          <KeyCard
            image={SatishSir}
            name="Shri Satish Mahana"
            description="Cabinet Minister of Industrial Development, 
Uttar Pradesh"
          />
          <KeyCard
            image={SanjeevSir}
            name="Shri Sanjeev Kumar Mittal (IAS)"
            description="IIDC"
          />
          <KeyCard
            image={ArvindSir}
            name="Shri Arvind Kumar (IAS)"
            description="Additional Chief Secretary and Chairman (U.P.S.I.D.A.)"
          />
          <KeyCard
            image={MayurSir}
            name="Shri Mayur Maheshwari (IAS)"
            description="Chief Executive Officer"
          />
        </div>
        <div className="benefits">
          <h1>Benefits with UPSIDA</h1>
          <p>
            Uttar Pradesh has been a leader in the industrial sector, and we
            have achieved this position with consistent efforts. We have taken
            right steps and in effect industries are not just coming to Uttar
            Pradesh from other states, but huge investments are flowing in from
            overseas also. Foreign investors are eager to invest in various
            sectors in the state after being convinced of the change in culture
            and ease of doing business. UPSIDA is the nodal agency for
            developing industrial infrastructure. UPSIDA has been spearheading
            the industrial promotion in the State and has been instrumental in
            keeping the State at the numero uno position among the states for
            several decades now. Till date, UPSIDA has developed a record 154
            industrial areas on approximately 43,788.54 acres of land across
            Uttar Pradesh.
          </p>
        </div>
      </div>
    );
};

export default KeyPeople;