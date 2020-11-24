import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import CityInfo from "./../CityInfo";
import Grid from "@material-ui/core/Grid";
import Weather from "./../Weather";
import { List, ListItem } from "@material-ui/core";


const getCityCode = (city, countryCode) => `${city}-${countryCode}`;
//renderCityAndCountry se va a convertir en una función que retorna otra función
const renderCityAndCountry = (eventOnClickCity) => {
  const renderCityAndCountryInternal = (cityAndCountry, weather) => {
    const { city, country,countryCode } = cityAndCountry;
    //const { temperature, state } = weather;
    return (
      <ListItem button key={getCityCode(city,countryCode)} onClick={eventOnClickCity}>
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
  const [allWeather, setAllWeather] = useState({});
  useEffect(() => {
    const setWeather = async (city, countryCode) => {
      const apiKey = "3ab4e867eee14fa120461e497a3aa725";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}&units=metric&lang=es`;

      try {
        const response = await axios.get(url);
        const { data } = response;

        const temperature = data.main.temp;
        const state = data.weather[0].main.toLowerCase();

        const propName =getCityCode(city,countryCode);
        const propValue = { temperature, state };
        setAllWeather((allWeather) => ({
          ...allWeather,
          [propName]: propValue,
        }));
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;
          console.log("data", data);
          console.log("status", status);
        } else if (error.request) {
          console.log("Server innaccesible o no tengo internet");
        } else {
          console.log("Error imprevisto", error);
        }
      }
      /*.then((response) => {
          const { data } = response;
          const temperature = data.main.temp;
          const state = data.weather[0].main.toLowerCase();

          const propName = `${city}-${country}`;
          const propValue = { temperature, state };
         
          setAllWeather((allWeather) => {
            return { ...allWeather, [propName]: propValue };
          });
        })
        .catch((error) => {
          if (error.response) {
            const { data, status } = error.response;
            console.log("data", data);
            console.log("status", status);
          } else if (error.request) {
            console.log("Server innaccesible o no tengo internet");
          } else {
            console.log("Error imprevisto", error);
          }
        });*/
    };

    cities.forEach(({ city, countryCode }) => {
      setWeather(city, countryCode);
    });
  }, [cities]);

  return (
    <List>
      {cities.map((cityAndCountry) =>
        renderCityAndCountry(onClickCity)(
          cityAndCountry,
          allWeather[getCityCode(cityAndCountry.city,cityAndCountry.countryCode)]
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
