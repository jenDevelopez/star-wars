import {  Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import Navigation from "./components/Navigation";
import StarshipsPage from "./pages/StarshipsPage";
import StarshipDetails from "./pages/StarshipsDetails";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
 



  
  return (
    
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<WelcomePage />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/starships" element={
            <ProtectedRoute>
              <StarshipsPage />
            </ProtectedRoute>}
           />
          <Route path="starships/:id" element={<StarshipDetails />}/>
        </Route>        

      </Routes>
  );
}

export default App;
