import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconState, { validValues } from "./../IconState";
import { IconContext } from "react-icons";
//import { Test } from './ForecastItem.styles';

const ForecastItem = ({ weekDay, hour, state, temperature }) => {
  return (
    <>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <Typography>{weekDay}</Typography>
        </Grid>
        <Grid item>
          <Typography>{hour}</Typography>
        </Grid>
        <Grid item>
          <Typography>
            <IconContext.Provider value={{ size: "12em" }}>
              <IconState state={state}></IconState>
            </IconContext.Provider>
          </Typography>
        </Grid>
        <Grid item>
          <Typography>{temperature} º</Typography>
        </Grid>
      </Grid>
    </>
  );
};

ForecastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  state: PropTypes.oneOf(validValues).isRequired,
  temperature: PropTypes.number.isRequired,
};

ForecastItem.defaultProps = {
  // bla: 'test',
};

export default ForecastItem;
