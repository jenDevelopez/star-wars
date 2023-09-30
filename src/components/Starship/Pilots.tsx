import { useEffect } from "react";
import { useStarsStore } from "../../store/StarsStore";

const Pilots = () => {
  const { pilots, setPilots, changeUrlPilots } = useStarsStore()

  useEffect(() => {
    const newPilots = changeUrlPilots();
    setPilots(newPilots);
  }, []);

  return (
    <div className="w-1/2 h-24 p-3 bg-zinc-900">
      {pilots.length > 0 ? (
        <div className="flex">
          <h1 className="text-xl">PILOTS:</h1>
          <div className="flex ml-3">
            {pilots.map((pilot) => (
              <img className="w-12" src={pilot} alt="" />
            ))}
          </div>
        </div>
      ) : (
        <p className="text-2xl">Not Pilots Found</p>
      )}
    </div>
  );
};

export default Pilots;
