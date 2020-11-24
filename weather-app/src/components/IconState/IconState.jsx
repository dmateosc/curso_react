import React from "react";
import PropTypes from "prop-types";
//import { Test } from './IconState.styles';
import {
  WiDayCloudy,
  WiDayFog,
  WiDaySunny,
  WiRain,
  WiRaindrop,
  WiSnow,
  WiThunderstorm,
} from "react-icons/wi";

export const validValues = [ "clouds", "fog", "clear", "rain", "snow","drizzle","thunderstorm"];
const stateByName = {
  clouds: WiDayCloudy,
  fog: WiDayFog,
  clear: WiDaySunny,
  rain: WiRain,
  snow: WiSnow,
  drizzle: WiRaindrop,
  thunderstorm: WiThunderstorm
};

const IconState = ({ state }) => {
  const Icon = stateByName[state];
  return (<Icon></Icon>);
};
IconState.propTypes = {
  state: PropTypes.oneOf(validValues).isRequired,
};

IconState.defaultProps = {
  // bla: 'test',
};

export default IconState;
