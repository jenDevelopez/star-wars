import { Link, useNavigate } from "react-router-dom"
import { useStarsStore } from "../store/StarsStore"
import { FormEvent } from "react"

export const Register = () => {

  const { signup, setEmail, setPassword } = useStarsStore(state => ({
    signup: state.createUserWithPassword,
    setEmail: state.setEmail,
    setPassword: state.setPassword,
  }))
  const { email, password, error } = useStarsStore()
  const navigate = useNavigate()




  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    await signup(email, password)
    navigate("/")
  }

  return (
    <div className="relative flex flex-col items-center justify-center  mt-6">
      <div className="w-full p-4 md:w-1/2 md:p-6 border-2 border-gray-400 rounded-md shadow-md border-top lg:max-w-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-400">
          Registrer your user
        </h1>

        <form autoComplete="off" onSubmit={handleSubmit} className="space-y-4">
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

          <div>
            <button type="submit" className="btn btn-block">Register</button>
          </div>
          {error && <p>{error}</p>}
          <div className="flex justify-between px-3">
            <Link to="/">forgot password</Link>
            <Link to="/">Login</Link>
          </div>
        </form>
      </div>
    </div>

  )
}

