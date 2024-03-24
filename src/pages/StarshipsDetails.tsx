// export default StarshipDetails;
import TitleStarsip from "../components/Starship/TitleStarship";
import ImageStarship from "../components/Starship/ImageStarship";
import InfoStarship from "../components/Starship/InfoStarships";
import Pilots from "../components/Starship/Pilots";
import Films from "../components/Starship/Films";

const StarshipDetails = () => {
  return (
    <div className="">
      <TitleStarsip />
      <ImageStarship />
      <InfoStarship />
      <div className="flex justify-center gap-2 ">
        <Pilots />
        <Films />
      </div>
    </div>
  );
};

export default StarshipDetails;
