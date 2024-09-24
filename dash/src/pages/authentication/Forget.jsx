import "./login.css";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

export default function Forget() {
  return (
    <>
      <div className="login d-flex align-items-center">
        <form
          action=""
          className="form d-flex col-4 flex-column shadow-lg p-5 bg-white"
        >
          <header className="d-flex justify-content-center mb-3 fs-2">
            sneat
          </header>
          <div className="col-10 mb-3">
            <h3 className="">Forgot Password? 🔒</h3>
            <span className="text-secondary">
              Enter your email and we'll send you instructions to reset your
              password
            </span>
          </div>
          <label htmlFor="Email" className="label">
            Email
          </label>
          <input
            type="email"
            className="border-1 rounded-3 m-2 p-1 ps-3 pe-3"
            placeholder="Enter Your Email"
            required
          />
          <button className="border-0 bg-primary text-white mt-4 rounded-3 p-2">
            Send Reset Link
          </button>
          <div className="footer d-flex mt-4 justify-content-center">
            <Link to="/login" className="text-primary">
              <FaAngleLeft />
              Back to login
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
