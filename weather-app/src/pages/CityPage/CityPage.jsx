import React from "react";
import Grid from "@material-ui/core/Grid";
import useCityPage from "./../../hooks/useCityPage"

import CityInfo from "./../../components/CityInfo";
import Weather from "./../../components/Weather";
import WeatherDetails from "./../../components/WeatherDetails";
import ForecastChart from "./../../components/ForecastChart";
import Forecast from "./../../components/Forecast";
import Paper from "@material-ui/core/Paper";
import AppFrame from "../../components/AppFrame";

//import { Test } from './CityPage.styles';

const CityPage = () => {
  
  const {city, charData, forecastItemList} = useCityPage();
  //Solamente se añaden al useEffect aquello que se utiliza a posteriori, pero si tenemos el useState se puede coger el estado previo y usarl
  //es decir, si no queremos entrar en bucle no debemos añadir los campos del useState al useEffect [], solamente aquello que queremos mantener
  //en este caso la cosntante que obtenemos se llama igual que el useState
  const country = "España";
  const state = "clouds";
  const temperature = "20";
  const humidity = 20;
  const wind = 120;

  /* const data = dataForecast;
  const forecastItemList = itemsExample; */
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
            {charData && <ForecastChart data={charData}/>}
          </Grid>
          <Grid item>
            {forecastItemList && (
              <Forecast forecastItemList={forecastItemList}/>
            )}
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
