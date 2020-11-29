import React from "react";
import PropTypes from "prop-types";
import useCityList from "./../../hooks/useCityList"
import {getCityCode} from "./../../utils/utils"
import CityInfo from "./../CityInfo";
import Grid from "@material-ui/core/Grid";
import Weather from "./../Weather";
import { List, ListItem } from "@material-ui/core";


//renderCityAndCountry se va a convertir en una función que retorna otra función
const renderCityAndCountry = (eventOnClickCity) => {
  const renderCityAndCountryInternal = (cityAndCountry, weather) => {
    const { city, country, countryCode } = cityAndCountry;
    //const { temperature, state } = weather;
    return (
      <ListItem
        button
        key={getCityCode(city, countryCode)}
        onClick={() => {
          eventOnClickCity(city, countryCode);
        }}>
        <Grid container justify="center" alignItems="center">
          <Grid item sm={9} xs={12}>
            <CityInfo city={city} country={country}></CityInfo>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Weather
              temperature={weather && weather.temperature}
              state={weather && weather.state}></Weather>
          </Grid>
        </Grid>
      </ListItem>
    );
  };
  return renderCityAndCountryInternal;
};


const CityList = ({ cities, onClickCity }) => {
  /*
   allWeather
    [Ciudad-Pais] : {}
   */
  //const weather = {temperature: 10, state: "sunny"}
  const {allWeather} = useCityList(cities);
  return (
    <List>
      {cities.map((cityAndCountry) =>
        renderCityAndCountry(onClickCity)(
          cityAndCountry,
          allWeather[
            getCityCode(cityAndCountry.city, cityAndCountry.countryCode)
          ]
        )
      )}
    </List>
  );
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      countryCode: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickCity: PropTypes.func.isRequired,
};

export default CityList;
