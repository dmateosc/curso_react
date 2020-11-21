import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Clouds from "vanta/dist/vanta.clouds.min";
import * as THREE from "three";
//import { Test } from './WellcomeScreen.styles';

const WelcomeScreen = ({ children }) => {
  const myRefDiv = useRef(null);
  const [vanta, setVanta] = useState(0); //valor inicial a 0

  useEffect(() => {
    console.log("MyRefDiv.current (en UseEffect", myRefDiv.current);
    // Solo pasa una vez por dentro del if
    if (!vanta) {
      //SOLO PASA UNA VEZ
      setVanta(
        Clouds({
          THREE,
          el: myRefDiv.current,
        })
      );
    }
    return () => {
      if (vanta) {
        vanta.destroy();
      }
    };
  }, [vanta]);

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
