import { useEffect } from "react";
import { useStarsStore } from "../../store/StarsStore";

export default function ImageStarship() {
  const {starshipItem, changeImage} = useStarsStore()

  useEffect(() => {
    changeImage(starshipItem)
  },[])
 
  return(
    <div className="flex justify-center">
      <img src={starshipItem.url} alt={starshipItem.name} onError={(error) => { error.currentTarget.src = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg' } }/>
    </div>
  )
}
