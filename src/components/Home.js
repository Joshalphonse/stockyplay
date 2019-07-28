import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import Navbar from './Navbar';
import LandingPageImage from './LandingPageImage';


const Home = props => {
  return (
    <div>
    <Navbar/>
    <LandingPageImage/>
    </div>
  );
};

export default withRouter(Home);
