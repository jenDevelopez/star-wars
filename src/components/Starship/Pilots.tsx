import { useEffect } from "react";
import { useStarsStore } from "../../store/StarsStore";

const Pilots = () => {
  const { pilots, setPilots, changeUrlPilots } = useStarsStore()

  useEffect(() => {
    const newPilots = changeUrlPilots();
    setPilots(newPilots);
  }, []);

  return (
    <div className="w-1/2 h-24 p-3 ">
      {pilots.length > 0 ? (
        <div className="flex flex-col">
          <h1 className="text-lg">PILOTS:</h1>
          <div className="flex ml-3 gap-1">
            {pilots.map((pilot) => (
              <img className="w-8" src={pilot} alt="" />
            ))}
          </div>
        </div>
      ) : (
        <p className="text-lg">Not Pilots Found</p>
      )}
    </div>
  );
};

export default Pilots;
