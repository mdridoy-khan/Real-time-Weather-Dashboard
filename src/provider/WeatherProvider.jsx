/* eslint-disable react/prop-types */
import { weatherContext } from "../context";
import { useWeather } from "../hooks";
const WeatherProvider = ({ children }) => {
  const { WeatherData, error, loading } = useWeather();
  return (
    <weatherContext.Provider value={{ WeatherData, error, loading }}>
      {children}
    </weatherContext.Provider>
  );
};
export default WeatherProvider;
