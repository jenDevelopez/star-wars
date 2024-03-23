import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useStarsStore } from "../store/StarsStore";
import ToogleTheme from "./ToogleTheme";

const Navigation = () => {


  const logout = useStarsStore(state => state.logout)
  const user = useStarsStore(state => state.user)
  const handleLogout = async () => {
    try{
      await logout()
    }catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="w-full h-screen bg-white dark:bg-gray-900">
      <div className="" id="header">
        <ToogleTheme />
        <div className=" flex justify-center mt-10 relative ">
          <img
            className="w-1/5 h-auto "
            src="/star-wars.svg"
            alt="logo star wars"
          />
        </div>
        {user ? (
          <Link
            className="border-gray-400 border-2 btn absolute top-2 right-0 mr-2 mt-2"
            to={"/"}
            onClick={handleLogout}
          >
            Logout
          </Link>
        ) : (
          <Link
            className="border-gray-400 border-2 btn absolute top-2 right-0 mr-2 mt-2"
            to={"/login"}
          >
            Login
          </Link>
        )}
      </div>
      <nav className='mt-5'>
        <ul className='flex justify-center  border-y-2 border-gray-400'>
          <li className='self-center border-l-2 border-gray-400  p-3'>
            <Link to="/">HOME</Link>
          </li>
          <li className='self-center border-x-2 border-gray-400 p-3'>
            <Link to="/starships">STARSHIPS</Link>
          </li>
        </ul>
      </nav>
      

      <Outlet />
    </div>
  );
};

export default Navigation;
