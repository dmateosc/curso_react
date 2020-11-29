import { useEffect, useState } from "react";
import axios from "axios";
import {validValues} from './../components/IconState'
import {getCityCode} from "./../utils/utils"
import { getWeatherUrl } from "../utils/urls";

//Hooks personalizados
const useCityList = (cities) => {
    const [allWeather, setAllWeather] = useState({});
    useEffect(() => {
      const setWeather = async (city, countryCode) => {
        
  
        try {
          const response = await axios.get(getWeatherUrl({city,countryCode}));
          const { data } = response;
  
          const temperature = data.main.temp;
          const stateFromServer = data.weather[0].main.toLowerCase();
          const state = validValues.includes(stateFromServer)? stateFromServer : null
  
          const propName = getCityCode(city, countryCode);
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
       
      };
  
      cities.forEach(({ city, countryCode }) => {
        setWeather(city, countryCode);
      });
    }, [cities]);
  
    //indicamos que vamos a devolver
    return {allWeather}
  };

export default useCityList


 /*
 
 Promises
 .then((response) => {
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