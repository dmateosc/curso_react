import React from "react";
import PropTypes from "prop-types";
//import { Test } from './IconState.styles';
import {
  WiCloud,
  WiDayCloudy,
  WiDayFog,
  WiDaySunny,
  WiRain,
} from "react-icons/wi";

export const validValues = ["cloud", "cloudy", "fog", "sunny", "rain"];
const stateByName = {
  cloud: WiCloud,
  cloudy: WiDayCloudy,
  fog: WiDayFog,
  sunny: WiDaySunny,
  rain: WiRain,
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
