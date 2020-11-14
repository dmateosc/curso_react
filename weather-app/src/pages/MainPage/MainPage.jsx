import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import CityList from "./../../components/CityList";
//import { Test } from './MainPage.styles';


const cities = [
  {
    city: "Madrid",
    country: "España",
  },
  {
    city: "Londres",
    country: "Reino Unido",
  },
  {
    city: "Barcelona",
    country: "España",
  },
  {
    city: "Lisboa",
    country: "Portugal",
  }
];

const MainPage = (props) => {
  const history = useHistory();
  const onClickHandler = () => {
    //history.push permite alternar la URL por programación
    history.push("/city");
  };
  return (
    <div className="MainPageWrapper">
      <h2>Lista de ciudades</h2>
      <CityList cities={cities} onClickCity={onClickHandler}></CityList>
    </div>
  );
};

MainPage.propTypes = {
  // bla: PropTypes.string,
};

MainPage.defaultProps = {
  // bla: 'test',
};

export default MainPage;
