import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import ForecastItem from "./../ForecastItem";
import { validValues } from "./../IconState";
//import { Test } from './Forecast.styles';

const renderForecastItem = (forecast) => {
  const { hour, weekDay, state, temperature } = forecast;
  return (
    <Grid item key={`${weekDay}${hour}`}>
      <ForecastItem
        hour={hour}
        weekDay={weekDay}
        state={state}
        temperature={temperature}
      ></ForecastItem>
    </Grid>
  );
};

const Forecast = ({ forecastItemList }) => {
  return (
    <>
      <Grid container justify="center" alignItems="center">
        {forecastItemList.map((forecast) => renderForecastItem(forecast))}
      </Grid>
    </>
  );
};

/*
 weekDay: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  state: PropTypes.oneOf(validValues).isRequired,
  temperature: PropTypes.number.isRequired,

*/

Forecast.propTypes = {
  forecastItemList: PropTypes.arrayOf(
    PropTypes.shape({
      weekDay: PropTypes.string.isRequired,
      hour: PropTypes.number.isRequired,
      state: PropTypes.oneOf(validValues).isRequired,
      temperature: PropTypes.number.isRequired,
    })
  ).isRequired,
};

Forecast.defaultProps = {
  // bla: 'test',
};

export default Forecast;
