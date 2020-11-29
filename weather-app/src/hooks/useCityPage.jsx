import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import "moment/locale/es";
import { useParams } from "react-router-dom";
import { getForecastUrl } from "../utils/urls";

const useCityPage = () => {
    const [charData, setData] = useState(null);
    const [forecastItemList, setForecastItemList] = useState(null);
    const { city, countryCode } = useParams();
    useEffect(() => {
        const getForecast = async () => {
          
          try {
            const { data } = await axios.get(getForecastUrl({city,countryCode}));
    
            const daysAhead = [0, 1, 2, 3, 4, 5];
            const days = daysAhead.map((d) => moment().add(d, "d"));
            const dataAux = days.map((d) => {
              const temObjArray = data.list.filter((item) => {
                const dayOfYear = moment.unix(item.dt).dayOfYear();
                return dayOfYear === d.dayOfYear();
              });
              const temps = temObjArray.map((item) => item.main.temp);
              return {
                dayHour: d.format("ddd"),
                min: Math.min(...temps),
                max: Math.max(...temps),
                hasTemps: (temps.length > 0 ? true: false)
              };
            }).filter(item => item.hasTemps)
            setData(dataAux);
            const interval = [4, 8, 12, 16, 20, 24];
            const forecastItemListAux = data.list
              .filter((item, index) => interval.includes(index))
              .map((item) => {
                return {
                  hour: moment.unix(item.dt).hour(),
                  weekDay: moment.unix(item.dt).format("dddd"),
                  state: item.weather[0].main.toLowerCase(),
                  temperature: item.main.temp
                };
              });
            setForecastItemList(forecastItemListAux);
          } catch (error) {}
        };
        getForecast();
      }, [city, countryCode]);

      return {city,charData,forecastItemList}
}

export default useCityPage