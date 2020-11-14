import React from "react";
import PropTypes from "prop-types";
import CityInfo from "./../CityInfo";
import Grid from "@material-ui/core/Grid";
import Weather from "./../Weather";
import { List, ListItem } from "@material-ui/core";

//renderCityAndCountry se va a convertir en una función que retorna otra función
const renderCityAndCountry = (eventOnClickCity) => {
  const renderCityAndCountryInternal = (cityAndCountry) => {
    const { city, country } = cityAndCountry;

    return (
      <ListItem button key={city} onClick={eventOnClickCity}>
        <Grid container justify="center" alignItems="center">
          <Grid item sm={8} xs={12}>
            <CityInfo city={city} country={country}></CityInfo>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Weather temperature={"10"} state="sunny"></Weather>
          </Grid>
        </Grid>
      </ListItem>
    );
  };
  return renderCityAndCountryInternal;
};

const CityList = ({ cities, onClickCity }) => {
  const funcAux = renderCityAndCountry(onClickCity);
  return <List>{cities.map((cityAndCountry) => funcAux(cityAndCountry))}</List>;
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickCity: PropTypes.func.isRequired,
};

export default CityList;
