import React, { PureComponent } from 'react'
import Weather from './Weather'

export default {
    title: "Weather",
    component: Weather
}

export const WeatherSunny = () => (<Weather temperature={10} state="sunny"/>)
export const WeatherCloud = () => (<Weather temperature={10} state="cloud"/>)