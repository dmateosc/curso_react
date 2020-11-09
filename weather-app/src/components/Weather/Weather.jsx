import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { WiCloud, WiDayCloudy,WiDayFog, WiDaySunny, WiRain } from "react-icons/wi";
import { IconContext } from "react-icons";

const stateByName = {
  cloud: WiCloud,
  clody: WiDayCloudy,
  fog: WiDayFog,
  sunny: WiDaySunny,
  rain: WiRain
}

const renderState = state => {
  
  const Icon = stateByName[state]
  return <Icon/>
}
const Weather = ({ temperature, state }) => {

 
  return (
    <>
      <IconContext.Provider value={{size: "12em"}}>
        {renderState(state)}
      </IconContext.Provider>
      <Typography variant="h2">{temperature}</Typography>
    </>
  );
}

Weather.propTypes = {
  temperature: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired
};

export default Weather;
