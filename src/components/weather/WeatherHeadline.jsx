/* eslint-disable react/prop-types */
import { useContext } from "react";
import CloudIcon from "../../assets/cloud.svg";
import HazeIcon from "../../assets/haze.svg";
import SnowIcon from "../../assets/icons/snow.svg";
import SunnyIcon from "../../assets/icons/sunny.svg";
import Pin from "../../assets/pin.svg";
import RainIcon from "../../assets/rainy.svg";
import ThunderIcon from "../../assets/thunder.svg";
import { weatherContext } from "../../context";
import { getFormatedDate } from "../../utils/date-time";

const WeatherHeadline = () => {
  const { WeatherData } = useContext(weatherContext);
  const { climate, temperature, time, location } = WeatherData;

  function getWeatherIcon(climate) {
    switch (climate) {
      case "Rain":
        return RainIcon;
      case "Clouds":
        return CloudIcon;
      case "Clear":
        return SunnyIcon;
      case "Snow":
        return SnowIcon;
      case "Thunder":
        return ThunderIcon;
      case "Fog":
        return HazeIcon;
      case "Haze":
        return HazeIcon;
      case "Mist":
        return HazeIcon;
      default:
        return SunnyIcon;
    }
  }

  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon(climate)} alt="climate" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.random(temperature)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={Pin} />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {getFormatedDate(time, "time", false)} -{" "}
        {getFormatedDate(time, "date", false)}
      </p>
    </div>
  );
};

export default WeatherHeadline;
