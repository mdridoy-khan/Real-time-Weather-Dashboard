/* eslint-disable react/prop-types */
import { faviouriteContext } from "../context";
import { useLocalStorage } from "../hooks";

const FaviouriteProvider = ({ children }) => {
  const [faviourite, setFaviourite] = useLocalStorage("faviourite", []);
  const addToFaviourite = (latitude, longitude, location) => {
    setFaviourite([
      ...faviourite,
      {
        latitude: latitude,
        longitude: longitude,
        location: location,
      },
    ]);
  };

  const removeFromFaviourite = () => {
    const restFaviourites = faviourite.filter(
      (fav) => fav.location !== location,
    );
    setFaviourite(restFaviourites);
  };
  return (
    <faviouriteContext.Provider
      value={{ addToFaviourite, removeFromFaviourite, faviourite }}
    >
      {children}
    </faviouriteContext.Provider>
  );
};
export default FaviouriteProvider;
