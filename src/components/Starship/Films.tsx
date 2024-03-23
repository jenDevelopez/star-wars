import { useEffect } from "react";
import { useStarsStore } from "../../store/StarsStore";


const Films = () => {
  const { films,setFilms,changeUrlFilms } = useStarsStore((state) => ({
    films:state.films,
    setFilms: state.setFilms,
    changeUrlFilms: state.changeUrlFilms
  }))


  useEffect(() => {
    const newFilms = changeUrlFilms()
    setFilms(newFilms)
  },[])

  
  return (
    
      <div className="w-1/2 h-24 p-3 dark:bg-zinc-900">
        {films.length > 0 ? (
          <div className="flex">
            <h1 className="text-xl">FILMS:</h1>
            <div className="flex ml-3 gap-1">
              {films.map((film) => (
                <img className="w-12" src={film} alt="" />
              ))}
            </div>
          </div>
        ) : (
          <p className="text-2xl">Not Films Found</p>
        )}
      </div>
    );
  
}

export default Films
