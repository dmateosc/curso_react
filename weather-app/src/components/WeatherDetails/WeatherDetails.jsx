import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
//import { Test } from './WeatherDetails.styles';

const WeatherDetails = ({humidity, wind}) => (
  <>
   <Typography>Humedad: {humidity}%</Typography>
   <Typography>{wind}</Typography>
  </>
);

WeatherDetails.propTypes = {
  humidity: PropTypes.number.isRequired
  , wind: PropTypes.number.isRequired
};

WeatherDetails.defaultProps = {
  // bla: 'test',
};

export default WeatherDetails;
