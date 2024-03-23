import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStarsStore } from "../store/StarsStore";

const StarshipList = () => {
  const {
    loadApiData,
    starshipList,
    setStarshipList,
    setStarshipItem,
    setPage,
    page,
    loadMoreData,
    end,
    setNext
  } = useStarsStore();

  useEffect(() => {
    async function getData() {
      try {
        const apiCall = await loadApiData();
        if (apiCall) {
          setStarshipList(apiCall.results);
          setNext(apiCall.next);
         
        }
      } catch (error) {
        console.error("El error es el siguiente:", error);
      }
    }
    getData();
    loadMoreData();
  }, [page]);
  return (
    <>
      <div className="flex flex-col justify-center items-center pb-4">
        {starshipList.map((starship, id) => (
          <Link
            className="w-2/3  rounded-md shadow-xl my-3 "
            key={id}
            to={`${id + 1}`}
            onClick={() => {
              setStarshipItem(starship);
            }}
          >
            <div className="p-4 ">
              <p>{id + 1}</p>
              <h2 className="text-xl font-semibold">{starship.name}</h2>
              <h3 className="text-lg">{starship.model}</h3>
            </div>
          </Link>
        ))}

        <p className="text-2xl font-semibold ">{end ? "No hay mas naves disponibles" : ""}</p>
     
      <button
        className={`btn btn-primary self-center my-2 ${end ? 'hidden' : 'block'}`}
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Add Page
      </button>
     </div>
    </>
  );
};

export default StarshipList;
