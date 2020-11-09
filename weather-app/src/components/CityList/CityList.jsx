import React from "react";
import PropTypes from "prop-types";
import CityInfo from "./../CityInfo";
import Weather from './../Weather';

const renderCityAndCountry = (cityAndCountry) => {
  const { city, country } = cityAndCountry;

  return (
    <li>
        
      <CityInfo city={city} country={country}></CityInfo>
      <Weather temperature={10} state="sunny"></Weather>
    </li>
  );
};

const CityList = ({ cities }) => {
  return (
    <ul>
      {cities.map((cityAndCountry) => renderCityAndCountry(cityAndCountry))}
    </ul>
  );
};

CityList.propTypes = {
  cities: PropTypes.array.isRequired,
};

export default CityList;
