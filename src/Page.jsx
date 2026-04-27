import { useContext, useEffect, useState } from "react";
import ClearSkyImage from "./assets/backgrounds/clear-sky.jpg";
import FewCloudsImage from "./assets/backgrounds/few-clouds.jpg";
import MistImage from "./assets/backgrounds/mist.jpeg";
import RainyDayImage from "./assets/backgrounds/rainy-day.jpg";
import ScartedCloudsImage from "./assets/backgrounds/scattered-clouds.jpg";
import SnowImage from "./assets/backgrounds/snow.jpg";
import ThunderStomeImage from "./assets/backgrounds/thunderstorm.jpg";
import WinterImage from "./assets/backgrounds/winter.jpg";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { weatherContext } from "./context";

const Page = () => {
  const { loading, WeatherData } = useContext(weatherContext);
  const [climateImage, setClimateImage] = useState("");

  function getBackgroundImage(climate) {
    switch (climate) {
      case "Rain":
        return RainyDayImage;
      case "Clouds":
        return ScartedCloudsImage;
      case "Clear":
        return ClearSkyImage;
      case "Snow":
        return SnowImage;
      case "Thunder":
        return ThunderStomeImage;
      case "Fog":
        return WinterImage;
      case "Haze":
        return FewCloudsImage;
      case "Mist":
        return MistImage;

      default:
        return ClearSkyImage;
    }
  }

  useEffect(() => {
    const bgImage = getBackgroundImage(WeatherData.climate);
    setClimateImage(bgImage);
  }, [WeatherData.climate]);
  return (
    <>
      {loading.state ? (
        <div className="flex items-center justify-center bg-gray-200 rounded-md p-8 w-96 mt-14 mx-auto">
          <p className="text-center text-2xl font-medium text-black">
            {loading.message}
          </p>
        </div>
      ) : (
        <div
          style={{ backgroundImage: `url('${climateImage}')` }}
          className="h-screen grid place-items-center bg-no-repeat bg-cover"
        >
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default Page;
