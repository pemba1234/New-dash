import Login from "./pages/authentication/Login";
import HeroPage from "./pages/HeroPage";
import Forget from "./pages/authentication/Forget";
import Register from "./pages/authentication/Register";
import Crm from "./pages/Crm";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "react-toastify/dist/ReactToastify.css";
import Privateroute from "./components/Privateroute";
export default function App() {
  return (
    <>


      <Router>
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<Forget />} />
          <Route path="/register" element={<Register />} />


          <Route path="/Private" element = {<Privateroute/>}>
          <Route path="crm" element = {<Crm/>}/>
           </Route>
        </Routes>
      </Router>
    </>
  );
}
