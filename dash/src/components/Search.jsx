import "./search.css";
import profile from "../assets/profile.jpg";
// ------------------logos ----------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { IoSearch } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { IoIosCard } from "react-icons/io";
import { IoPower } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

export default function Search() {
  function Menu() {
    let x = document.getElementById("navbar");

    x.classList.toggle("show");
  }

  return (
    <>
      <div className="search d-lg-flex col-12 justify-content-end">
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
            <div className="d-flex border bg-light me-3 pt-1 rounded">
              <FaStar className="fs-5 ms-2 me-3 text-secondary rounded" />
              <p className="me-2">967</p>
            </div>
            <div className="profile dropdown">
              <img src={profile} alt="Profile" data-bs-toggle="dropdown" />
              <ul className="dropdown-menu border-0 shadow-lg">
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
                  Bilang Plan
                </li>
                <hr />
                <li className="dropdown-item">
                  <IoPower className="me-2 text-secondary fs-5" />
                  Logout
                </li>
              </ul>
            </div>
            <a className=" ms-2" onClick={Menu}>
              <FontAwesomeIcon icon={faBars} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
