import React from "react";
import { Link, Switch, Route } from 'react-router-dom';
import styled from "styled-components";
import LinkBar from "./components/LinkBar";
import Services from "./components/Services";
import KeyPeople from "./components/KeyPeople";
import Card from './util/Card';
import Avatar from './util/Avatar';
import icon from './assets/images/internet.png';
import './Body.css';

const Body = () => {
  return (
    <div className="body-div">
  
      <Services />
      <KeyPeople />
    </div>
  );
};

export default Body;

