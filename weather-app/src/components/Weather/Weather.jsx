import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";
import IconState, { validValues } from "./../IconState";
import { IconContext } from "react-icons";

const Weather = ({ temperature, state }) => {
  return (
    <>
      <Grid
        container
        item
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        
          <IconContext.Provider value={{ size: "6em" }}>
            {
              state?
              <IconState state={state}></IconState>:
              <Skeleton variant="circle" height={80} width={80}></Skeleton>}
          </IconContext.Provider>
          {
            temperature?
            <Typography variant="h3">{temperature}</Typography>:
            <Skeleton variant="rect" height={80} width={80}></Skeleton>}
        
      </Grid>
    </>
  );
};

Weather.propTypes = {
  temperature: PropTypes.string.isRequired,
  state: PropTypes.oneOf(validValues).isRequired,
};

export default Weather;
