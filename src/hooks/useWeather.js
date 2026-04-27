import { useEffect, useState } from "react";

const useWeather = () => {
  const [WeatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching Weather Data...",
      });
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}$units=metric`,
      );
      if (!response.ok) {
        const errorMessage = `Fetching weather data failde: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();
      const updatedWeatherData = {
        ...WeatherData,
        location: data?.name,
        climate: data?.weather[0]?.main,
        temperature: data?.main?.temp,
        maxTemperature: data?.main?.temp_max,
        minTemperature: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.clouds?.all,
        wind: data?.wind?.speed,
        time: data?.dt,
        longitude: longitude,
        latitude: latitude,
      };
      setWeatherData(updatedWeatherData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };
  useEffect(() => {
    setLoading({
      state: true,
      message: "Finding Location...",
    });
    navigator.geolocation.getCurrentPosition(function (position) {
      fetchWeatherData(position.coords.latitude, position.coords.longitude);
    });
  }, []);
  return {
    WeatherData,
    error,
    loading,
  };
};
export default useWeather;
