import { Link, useNavigate } from "react-router-dom"
import { useStarsStore } from "../store/StarsStore"
import { FormEvent } from "react"


export const Login = () => {
  const navigate = useNavigate()
  const {login,setEmail,setPassword} = useStarsStore()
  const {email,password} = useStarsStore()
  const error = useStarsStore(state => state.error)


  const submit = async(e:FormEvent) => {
    e.preventDefault()
    await login(email,password)
    navigate('/starships')
  }

  return (
    <div className="relative flex flex-col items-center justify-center  mt-6 px-4">
    <div className=" w-full p-4 md:w-1/2 md:p-6 border-2 border-gray-400 rounded-md shadow-md border-top lg:max-w-lg">
      <h1 className="text-3xl font-semibold text-center text-gray-400">
       Login
      </h1>
      <form autoComplete="off" onSubmit={submit} className="space-y-4">
        <div>
          <label htmlFor="email" className="label">
            <span className="text-base label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="youremail@comapny.com"
            className="w-full input input-bordered"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password" className="label">
            <span className="text-base label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            className="w-full input input-bordered"
            onChange={(e) => setPassword(e.target.value)}
          
          />
          
        </div>
        { error && <p className="text-red-500 py-2">{error}</p>}

        <div>
          <button type="submit"  className="btn btn-block">Login</button>
        </div>

        <div className="flex justify-between px-3">
          <Link to="/">forgot password</Link>
          <Link to="/register">Register</Link>
        </div>

        <div>
          <h2>TEST</h2>
          <h3><span>User:</span>test@test.com</h3>
          <h3><span>Password:123456</span></h3>
        </div>
      </form>
    </div>
  </div>
 
  )
}

