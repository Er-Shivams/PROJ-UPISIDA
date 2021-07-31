import React from "react";
import {Link} from "react-router-dom";
import './LinkBar.css';

const LinkBar= () =>{
    return (
      <div className="link-bar">
        <div className="links">
          <a> <Link>Industrial Info</Link> </a>
          <a><Link to="/policies">Policies</Link></a>
          <a><Link>GIS</Link></a>
          <a><Link to="/flagship">Flagship Projects</Link></a>
          <a><Link to ="/eServices">E-Services</Link></a>
          <a><Link to="/officeOrder">Office Orders</Link></a>
          <a><Link>Resource Centre</Link></a>
          
        </div>
      </div>
    );
} ;

export default LinkBar;