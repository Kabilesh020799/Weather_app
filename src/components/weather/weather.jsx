import React, { useEffect, useState } from "react";
import classes from './style.module.css';

const Weather = (props) => {
  const {
    weatherItem
  } = props;

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const apiKey = "dd89252cd927078d8656424c6a5193e6";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  useEffect(() => {
    if(weatherItem) {
      setWeather(weatherItem);
    }
  }, [weatherItem]);
  
  const onClick = async() => {
    let data = await fetch(url);
    data = await data.json();
    setWeather(data);
  };

  return (
    <div className={classes.weather}>
      <div className={classes.weather_header}>
        <input placeholder="Enter the city name" className={classes.weather_input} onChange={(e) => setCity(e.target.value)} value={city} />
        <button onClick={onClick} className={classes.weather_btn}>Submit</button>
      </div>
      {
        weather ? (
          <div className={classes.weather_body}>
            <div className={classes.weather_body_head}>{weather?.name}</div>
            <div className={classes.weather_body_sub}>Current Temperature</div>
            <div className={classes.weather_body_temp} id="temp">{`${weather?.main.temp} °C`} </div>
            <div className={classes.weather_body_sub}>Weather</div>
            <div className={classes.weather_body_temp} id="weather">{weather.weather[0].description}</div>
            <div className={classes.weather_body_sub}>Humidity</div>
            <div className={classes.weather_body_temp} id="humidity">{`${weather.main.humidity} %`}</div>
            <div className={classes.weather_body_sub}>Wind Speed</div>
            <div className={classes.weather_body_temp} id="wind">{`${weather.wind.speed} m/s`}</div>
          </div>
        ) : null
      }
    </div>
  );
};

export default Weather;
