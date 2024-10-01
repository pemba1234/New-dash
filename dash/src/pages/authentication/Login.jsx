// /src/pages/authentication/Login.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // Adjusted path
import "./login.css";

export default function Login() {
  const { login } = useAuth(); // Use the login function from context
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const validEmail = "admin@gmail.com";
    const validPassword = "admin";

    if (email === validEmail && password === validPassword) {
      setError(null);
      login({ email }); // Pass user data to login function
      navigate("/hero"); // Redirect to hero page after login
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login d-flex align-items-center justify-content-center vh-100">
      <form
        className="form d-flex flex-column shadow-lg p-5 bg-white rounded-3"
        onSubmit={handleLogin}
      >
        <header className="d-flex justify-content-center mb-4 fs-2">
          Sneat
        </header>
        <div className="col-12 mb-4 text-center">
          <h3>Welcome to Sneat! 👋</h3>
          <p className="text-secondary">
            Please sign in to your account and start the adventure.
          </p>
        </div>
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email or Username
          </label>
          <input
            type="text"
            id="email"
            className="form-control"
            placeholder="Enter your email or username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <Link to="/forget-password" className="text-primary">
            Forgot Password?
          </Link>
        </div>
        <button type="submit" className="btn btn-primary w-100 mb-3">
          Login
        </button>
        <div className="text-center">
          <p>
            New on our platform?{" "}
            <Link to="/register" className="text-primary">
              Create an account
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
