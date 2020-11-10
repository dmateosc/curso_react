import React from 'react'
import Forecast from './Forecast'


export default {
    title: "Forecast",
    component: Forecast
}

const items = [{
    hour: 10,
    state: "sunny",
    temperature: 23,
    weekDay: "Lunes"
},{
    hour: 10,
    state: "sunny",
    temperature: 23,
    weekDay: "Lunes"
}]

export const LunesSoleado = () => <Forecast forecastItemList={items} ></Forecast>