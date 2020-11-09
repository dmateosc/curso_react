import React, { Component } from 'react'
import CityList from './CityList'

export default {
    title: "CityList",
    component: CityList
}
const cities = [{
    "city": "Madrid",
    "country": "España"


}]

export const CityListExample = () => <CityList cities={cities}></CityList>