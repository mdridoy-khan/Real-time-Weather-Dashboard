import Heart from "../../assets/heart.svg";
const Faviourite = () => {
  return (
    <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
      <img src={Heart} alt="heart icon" />
      <span>Favourite Locations</span>
    </div>
  );
};

export default Faviourite;
