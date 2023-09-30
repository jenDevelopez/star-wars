import { useStarsStore } from "../../store/StarsStore";

export default function InfoStarship() {
  const { starshipItem } = useStarsStore();

  return (
    <div className=" my-3 flex flex-col justify-center items-center bg-zinc-900">
      <div className="self-center my-5">
        <p className="text-xl text-gray-100 text-center">
          MODEL:{" "} <span className="text-gray-400">{starshipItem.model}</span>
        </p>
        <p className="text-xl text-gray-100 text-center">
          STARSHIP CLASS:{" "}
          <span className="text-gray-400">{starshipItem.starship_class}</span>
        </p>
        <p className="text-xl text-gray-100 text-center">
          MANUFACTURER: {" "}
          <span className="text-gray-400">{starshipItem.manufacturer}</span>
        </p>
        <p className="text-xl text-gray-100 text-center">
          COST: {" "}
          <span className="text-gray-400">
            {starshipItem.cost_in_credits} CREDITS
          </span>
        </p>
      </div>

      <div className="flex justify-around my-5 w-4/5">
        <div className="self-start w-1/2">
          <p className="text-lg text-gray-100">
            CREW: <span className="text-gray-400">{starshipItem.crew}</span>
          </p>
          <p className="text-lg text-gray-100">
            PASSENGER CAPACITY:{" "}
            <span className="text-gray-400">{starshipItem.passengers}</span>
          </p>
          <p className="text-lg text-gray-100">
            CARGO CAPACITY:{" "}
            <span className="text-gray-400">
              {starshipItem.cargo_capacity} TONS
            </span>
          </p>
          <p className="text-lg text-gray-100">
            CONSUMABLES:{" "}
            <span className="text-gray-400">
              {starshipItem.consumables.toUpperCase()}
            </span>
          </p>
        </div>
        <div className="self-start w-1/2">
          <p className="text-lg text-gray-100">
            LENGTH: <span className="text-gray-400">{starshipItem.length}</span>
          </p>
          <p className="text-lg text-gray-100">
            MAXIMUM ATMOSPHERING SPEED:{" "}
            <span className="text-gray-400">
              {starshipItem.max_atmosphering_speed} HM/H
            </span>
          </p>
          <p className="text-lg text-gray-100">
            HYPERDRIVE RATING:{" "}
            <span className="text-gray-400">
              {starshipItem.hyperdrive_rating}
            </span>
          </p>
          <p className="text-lg text-gray-100">
            MAXIMUM SPEED IN REALSPACE:{" "}
            <span className="text-gray-400">{starshipItem.MGLT}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
