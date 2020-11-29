import React from "react";
import PropTypes from "prop-types";
import useVanta from "./../../hooks/useVanta"
//import { Test } from './WellcomeScreen.styles';


const WelcomeScreen = ({ children }) => {
  
  const myRefDiv = useVanta()
  //En la primera renderización
  console.log(myRefDiv.current);
  return (
    <div className="full" ref={myRefDiv}>
      {children}
    </div>
  );
};

WelcomeScreen.propTypes = {
  children: PropTypes.node.isRequired,
};

WelcomeScreen.defaultProps = {
  // bla: 'test',
};

export default WelcomeScreen;
