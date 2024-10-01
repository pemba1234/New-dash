import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/authentication/Login";
import HeroPage from "./pages/HeroPage";
import Forget from "./pages/authentication/Forget";
import Register from "./pages/authentication/Register";
import Crm from "./pages/Crm";
import ProtectedRoute from "./components/shared/ProtectedRoute";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

export default function App() {
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={user ? <Navigate to="/hero" /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<Forget />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}
