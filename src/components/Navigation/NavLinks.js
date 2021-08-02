import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="https://www.onlineupsidc.com/HeadOffice.aspx">ContactUs</NavLink>
      </li>
      <li>
        <NavLink to="http://webmail.upsidc.com/">WebMail</NavLink>
      </li>
      <li>
        <NavLink to="/officeLogin">OfficeLogin</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;