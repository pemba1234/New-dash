import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="login d-flex align-items-center">
        <form action="" className="form d-flex flex-column shadow-lg p-5">
          <header className="d-flex justify-content-center mb-3 fs-2">
            sneat
          </header>
          <div className="col-10 mb-3">
            <h3 className="">Welcome to sneat! 👋</h3>
            <span className="text-secondary">
              Please sign-in to your account and start the adventure
            </span>
          </div>
          <label htmlFor="Email" className="label">
            Email or Username
          </label>
          <input
            type="text"
            className="border-1 rounded-3 m-2 p-1 ps-3 pe-3"
            placeholder="Enter Your Email or Password"
            required
          />
          <label htmlFor="password" className="label mt-3">
            Password
          </label>
          <input
            type="password"
            className="border-1 rounded-3 m-2 p-1 ps-3 pe-3"
            placeholder="..........."
            required
          />
          <div className="two d-flex justify-content-between p-2 mt-3 mb-3">
            <label htmlFor="">
              <input type="checkbox" /> Remember me
            </label>
            <Link to="/forget-password">Forget Password?</Link>
          </div>
          <button className="border-0 bg-primary text-white rounded-3 p-2">
            Login
          </button>
          <div className="footer d-flex mt-4 justify-content-center">
            <p>
              New on our platform?<Link to="/register"> Create an account</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
