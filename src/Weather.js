import React from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";
import { SpinnerRoundOutlined } from "spinners-react";

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
      <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="black"
        size={50}
        animate={true}
      />
      <br />
      <SpinnerRoundOutlined
        size={100}
        thickness={100}
        speed={100}
        color="#36ad47"
        secondarycolor="rgba(0, 0, 0, 0.44)"
      />
    </div>
  );
}
