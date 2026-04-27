import { useContext, useEffect, useState } from "react";
import RedHeart from "../../assets/heart-red.svg";
import Heart from "../../assets/heart.svg";
import { faviouriteContext, weatherContext } from "../../context";
const AddToFaviourite = () => {
  const { addToFaviourite, removeFromFaviourite, faviourite } =
    useContext(faviouriteContext);
  const { WeatherData } = useContext(weatherContext);
  const { latitude, longitude, location } = WeatherData;
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const found = faviourite.find((fav) => fav.location === location);
    setIsFav(found);
  }, []);

  function handleFaviourite() {
    const found = faviourite.find((fav) => fav.location === location);

    if (!found) {
      addToFaviourite(latitude, longitude, location);
    } else {
      removeFromFaviourite(location);
    }
    setIsFav(!isFav);
  }
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFaviourite}
        >
          <span>Add to Favourite</span>
          <img src={isFav ? RedHeart : Heart} alt="heart icon" />
        </button>
      </div>
    </div>
  );
};

export default AddToFaviourite;
