import React from "react";
import { Link } from "react-router-dom";
//import { Test } from './WelcomePage.styles';

const WelcomePage = () => (
  <div className="WelcomePageWrapper">
    <div>
      <Link to="/main">Ir a Main</Link>
    </div>
  </div>
);



export default WelcomePage;
