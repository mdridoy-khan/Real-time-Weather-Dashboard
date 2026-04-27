import Page from "./Page";
import {
  FaviouriteProvider,
  LocationProvider,
  WeatherProvider,
} from "./provider";
function App() {
  return (
    <WeatherProvider>
      <FaviouriteProvider>
        <LocationProvider>
          <Page />
        </LocationProvider>
      </FaviouriteProvider>
    </WeatherProvider>
  );
}

export default App;
