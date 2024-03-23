// export default StarshipDetails;
import TitleStarsip from "../components/Starship/TitleStarship";
import ImageStarship from "../components/Starship/ImageStarship";
import InfoStarship from "../components/Starship/InfoStarships";
import Pilots from "../components/Starship/Pilots";
import Films from "../components/Starship/Films";

const StarshipDetails = () => {
  return (
    <div className="dark:bg-zinc-900">
      <TitleStarsip />
      <ImageStarship />
      <InfoStarship />
      <div className="flex justify-between px-4">
        <Pilots />
        <Films />
      </div>
    </div>
  );
};

export default StarshipDetails;
