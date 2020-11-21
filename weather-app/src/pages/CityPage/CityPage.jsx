import React from "react";
import Grid from "@material-ui/core/Grid";
import CityInfo from "./../../components/CityInfo";
import Weather from "./../../components/Weather";
import WeatherDetails from "./../../components/WeatherDetails";
import ForecastChart from "./../../components/ForecastChart";
import Forecast from "./../../components/Forecast";
import Paper from "@material-ui/core/Paper";
import AppFrame from "../../components/AppFrame";

//import { Test } from './CityPage.styles';
const dataForecast = [
  {
    dayHour: "Jue 18",
    min: 14,
    max: 22,
  },
  {
    dayHour: "Vie 06",
    min: 18,
    max: 27,
  },
  {
    dayHour: "Vie 12",
    min: 18,
    max: 28,
  },
  {
    dayHour: "Vie 18",
    min: 18,
    max: 25,
  },
  {
    dayHour: "Sab 06",
    min: 15,
    max: 22,
  },
  {
    dayHour: "Sab 12",
    min: 12,
    max: 19,
  },
];

const itemsExample = [
  {
    hour: 10,
    state: "sunny",
    temperature: 23,
    weekDay: "Lunes",
  },
  {
    hour: 10,
    state: "sunny",
    temperature: 23,
    weekDay: "Martes",
  },
  {
    hour: 10,
    state: "sunny",
    temperature: 23,
    weekDay: "Miercoles",
  },
  {
    hour: 10,
    state: "sunny",
    temperature: 23,
    weekDay: "Jueves",
  },
  {
    hour: 10,
    state: "sunny",
    temperature: 23,
    weekDay: "Viernes",
  },
];

const CityPage = () => {
  const city = "Cáceres";
  const country = "España";
  const state = "cloudy";
  const temperature = "20";
  const humidity = 20;
  const wind = 120;
  const data = dataForecast;
  const forecastItemList = itemsExample;
  return (
    <AppFrame>
      <Paper elevation={3}>
        <Grid container justify="space-around" directon="column" spacing={2}>
          <Grid item container xs={12} justify="center" alignItems="flex-end">
            <CityInfo city={city} country={country}></CityInfo>
          </Grid>
          <Grid container item xs={8} justify="center">
            <Weather state={state} temperature={temperature}></Weather>
            <WeatherDetails humidity={humidity} wind={wind}></WeatherDetails>
          </Grid>
          <Grid item xs={12}>
            <ForecastChart data={data}></ForecastChart>
          </Grid>
          <Grid item>
            <Forecast forecastItemList={forecastItemList}></Forecast>
          </Grid>
        </Grid>
      </Paper>
    </AppFrame>
  );
};

CityPage.propTypes = {
  // bla: PropTypes.string,
};

CityPage.defaultProps = {
  // bla: 'test',
};

export default CityPage;
