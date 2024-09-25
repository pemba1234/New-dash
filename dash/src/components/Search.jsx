import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./search.css";
import { IoSearch } from "react-icons/io5";
import profile from "../assets/profile.jpg";
import { IoPerson } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { IoIosCard } from "react-icons/io";
import { IoPower } from "react-icons/io5";

export default function Search() {
  return (
    <>
      <div className="d-lg-flex col-12 justify-content-end">
        <div
          className="rounded-3 p-3 d-flex bg-white border-0 me-lg-5
      justify-content-between shadow col-lg-9 col-12 mt-3"
        >
          <div className="input d-flex w-25 ms-lg-3">
            <IoSearch className="me-2 mt-1 fs-5" />
            <input
              className="bg-white border-0"
              type="text"
              placeholder="Search..."
            />
          </div>
          <div className="ms-2 d-flex">
            <div className="profile dropdown">
              <img src={profile} alt="Profile" data-bs-toggle="dropdown" />
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <IoPerson className="me-2 text-secondary fs-5" />
                  My Profile
                </li>
                <li className="dropdown-item">
                  <IoMdSettings className="me-2 text-secondary fs-5" />
                  Settings
                </li>
                <li className="dropdown-item">
                  <IoIosCard className="me-2 text-secondary fs-5" />
                  Billing Plan
                </li>
                <hr />
                <li className="dropdown-item">
                  <IoPower className="me-2 text-secondary fs-5" />
                  Logout
                </li>
              </ul>
            </div>
            <button
              className="navbar-toggler ms-2"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggle"
              aria-controls="navbarToggle"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
