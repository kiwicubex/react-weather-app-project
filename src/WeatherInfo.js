import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
export default function WeatherInfo(){
    return(
        <div className="WeatherInfo">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix"><div className="float-left">
                <WeatherIcon code={props.data.icon}/></div>
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              />
<WeatherTemperature  celsius={props.data.temperature}/>
              
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind:{weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
)
}