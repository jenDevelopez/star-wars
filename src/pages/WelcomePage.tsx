import { useStarsStore } from "../store/StarsStore";

const WelcomePage = () => {
  
  const user = useStarsStore(state => state.user)
 
  return (
    <div className=" w-full  h-[65vh] md:flex md:justify-center md:items-start">
      <div className=" mt-10 flex flex-col content-center items-center ">
        <h1 className="text-3xl text-center text-gray-400" > Hola {user ? user.email : 'Jedi'}
        </h1>
          <h2 className="text-xl my-5 text-center">Bienvenido/a a la pagina de Naves espaciales de StarWars</h2>
          <img className="w-1/2 " src="/storm-trooper-star-wars.gif" alt="" />
      </div>
    </div>
  );
};

export default WelcomePage;