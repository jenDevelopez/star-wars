
import { Navigate } from "react-router"
import { ProviderPropsType } from "../interfaces/interfaces"
import { useStarsStore } from "../store/StarsStore"

const ProtectedRoute = ({children}:ProviderPropsType) => {
  const { user, loading} = useStarsStore()
  if(loading) return <h1>Loading</h1>
  if(!user) return <Navigate to={'/login'} />
  return (
    <>
      {children}
    </>
  )
}

export default ProtectedRoute
