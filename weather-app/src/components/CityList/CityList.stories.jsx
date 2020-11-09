import React, { Component } from "react";
import CityList from "./CityList";
import {action} from '@storybook/addon-actions'
export default {
  title: "CityList",
  component: CityList,
};
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

export const CityListExample = () => <CityList cities={cities} onClickCity={action("Click en city") }></CityList>;
