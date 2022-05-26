import React from "react";
import axios from "axios";
import ReactAnimatedWeatherUpdated from "react-animated-weather-updated";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${props.city} is ${Math.round(
        response.data.main.temp
      )} °C`
    );
  }

  let apiKey = "1d7725b685e963b59e42feb85aa209c6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div>
      <ReactAnimatedWeatherUpdated
        icon="CLEAR_DAY"
        color="black"
        size={50}
        animate={true}
      />
    </div>
  );
}
