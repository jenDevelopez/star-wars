import { useStarsStore } from "../store/StarsStore"
import DarkModeIcon from "./DarkModeIcon";
import LightModeIcon from "./LightModeIcon";



function ToogleTheme(){
  const {darkMode,setDarkMode} = useStarsStore();

  const darkModeHandler = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <button onClick={() => darkModeHandler()} className="h-10 w-12 mt-2 ml-2 hover:opacity-75">

      {darkMode ? (
        <LightModeIcon />
        ): (
        <DarkModeIcon />
      )}

    </button>
  )
}

export default ToogleTheme
