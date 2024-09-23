import Login from "./pages/authentication/Login";
import HeroPage from "./pages/HeroPage";
import Forget from "./pages/authentication/Forget";
import Register from "./pages/authentication/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<Forget />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}
