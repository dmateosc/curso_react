import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import IconState, { validValues } from "./../IconState";
import { IconContext } from "react-icons";


const Weather = ({ temperature, state }) => {
  return (
    <>
      <IconContext.Provider value={{ size: "12em" }}>
        <IconState state={state}></IconState>
      </IconContext.Provider>
      <Typography variant="h2">{temperature}</Typography>
    </>
  );
};

Weather.propTypes = {
  temperature: PropTypes.string.isRequired,
  state: PropTypes.oneOf(validValues).isRequired,
};

export default Weather;
