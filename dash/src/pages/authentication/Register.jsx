import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

export default function Register() {
  return (
    <>
      <Link to="/login" className="position-fixed">
        <FaAngleLeft />
        Back to login
      </Link>
      <div className="login d-flex align-items-center">
        <form
          action=""
          className="form d-flex col-lg-4 flex-column shadow-lg p-5"
        >
          <header className="d-flex justify-content-center mb-3 fs-2">
            sneat
          </header>
          <div className="col-10 mb-3">
            <h3 className="">Adventure starts here 🚀</h3>
            <span className="text-secondary">
              Make your app management easy and fun!
            </span>
          </div>
          <label htmlFor="username" className="label">
            Username
          </label>
          <input
            type="text"
            className="border-1 rounded-3 m-2 p-1 ps-3 pe-3"
            placeholder="Enter Your Username"
            required
          />
          <label htmlFor="Email" className="label">
            Email
          </label>
          <input
            type="email"
            className="border-1 rounded-3 m-2 p-1 ps-3 pe-3"
            placeholder="Enter Your Email"
            required
          />
          <label htmlFor="password" className="label">
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
              <input type="checkbox" /> I agree to{" "}
              <Link to="/forget">privacy policy & terms</Link>
            </label>
          </div>
          <button className="border-0 bg-primary text-white rounded-3 p-2">
            Sign up
          </button>
          <div className="footer d-flex mt-4 justify-content-center">
            <p>
              Already have an account?{" "}
              <Link to="/create"> Sign in instead</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
