import React from "react";
import { useHistory } from "react-router-dom";
import Paper from '@material-ui/core/Paper'
import AppFrame from "../../components/AppFrame";
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
  },
];

const MainPage = (props) => {
  const history = useHistory();
  const onClickHandler = () => {
    //history.push permite alternar la URL por programación
    history.push("/city");
  };
  return (
    <AppFrame>
      <Paper elevation={3}>
      <CityList cities={cities} onClickCity={onClickHandler}></CityList>
      </Paper>
    </AppFrame>
  );
};

MainPage.propTypes = {
  // bla: PropTypes.string,
};

MainPage.defaultProps = {
  // bla: 'test',
};

export default MainPage;
