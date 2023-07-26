import React from "react";
import axios from "axios";
import { Circles } from "react-loader-spinner";

export default function Weather(props) {/*
    function handleResponse(response) {
        alert(
            `The weather in ${response.data.name} is ${response.data.main.temp.toFixed(1)}°C`
        );
    }
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);
*/
    
    return (
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    );
}