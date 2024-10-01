import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext, createContext, useState } from "react";
import Login from "./pages/authentication/Login";
import HeroPage from "./pages/HeroPage";
import Forget from "./pages/authentication/Forget";
import Register from "./pages/authentication/Register";
import Crm from "./pages/Crm";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

export default function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/crm" element={<Crm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<Forget />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
   </>
  );
}
