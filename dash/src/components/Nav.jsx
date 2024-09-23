import "./Nav.css";
import { Link } from "react-router-dom";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBorderAll,
  faEnvelope,
  faComments,
  faCalendar,
  faTableCells,
  faUnlockKeyhole,
  faSquareMinus,
  faHouse,
  faHotel,
  faDiceD6,
  faStaffSnake,
  faCreditCard,
  faCrown,
  faNewspaper,
  faBoxArchive,
  faRectangleList,
  faIndent,
  faTableCellsRowUnlock,
  faCircle,
  faAngleRight,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const usetoggle = () => setIsCollapsed(!isCollapsed);
  return (
    <>
      <nav className="show shadow bg-white position-fixed ps-2" id="navbar">
        <div className="hero mb-1 bg-white">
          <div className="d-flex pt-2 justify-content-center bg-white mb-3  position-fixed fs-2">
            <div className="me-2 text-primary">
              <FontAwesomeIcon icon={faStaffSnake} />
            </div>
            sneat
          </div>
        </div>
        {/* ----------- Dashboard Accordion ------------- */}
        <div className="accordion" id="Navbar">
          <div className="component mb-3 pt-2 mt-4">
            <button
              onClick={usetoggle}
              className="d-flex border-0 bg-white "
              data-bs-toggle="collapse"
              href="#dashboardCollapse"
              aria-controls="dashboardCollapse"
              id="dash"
            >
              <div className="text d-flex align-items-center mt-2 ps-1 p-2 border-0 rounded-2">
                <div>
                  <FontAwesomeIcon icon={faHouse} className="icon me-3 ms-2" />
                  Dashboard
                </div>
                <div className="d-flex">
                  <span className="five bg-danger text-white ms-2">5</span>
                  <div id="angle" className="ms-2 me-1">
                    <FontAwesomeIcon icon={faAngleRight} />
                  </div>
                </div>
              </div>
            </button>
            <div
              className="collapse"
              id="dashboardCollapse"
              data-bs-parent="#Navbar"
            >
              <ul className="drop-menu d-flex flex-column">
                <Link className="drop-item d-flex ps-4 me-3 p-2" to="/">
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  Analytic
                </Link>
                <Link className="drop-item d-flex ps-4 me-3 p-2" to="/crm">
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  CRM
                </Link>
                <a className="drop-item d-flex ps-4 me-3 p-2" href="#">
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  E-commerce
                </a>
                <a className="drop-item d-flex ps-4 me-3 p-2" href="#">
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  Logistic
                </a>
                <a className="drop-item d-flex ps-4 me-3 p-2" href="#">
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  Academy
                </a>
              </ul>
            </div>
          </div>

          {/* -------------- Layout Accordion --------------------- */}
          <div className="mb-3">
            <a
              className="d-flex align-items-center"
              data-bs-toggle="collapse"
              href="#layoutCollapse"
              aria-expanded="false"
              aria-controls="layoutCollapse"
            >
              <div className="common-style d-flex align-items-center">
                <div className="icon me-3 ms-3">
                  <FontAwesomeIcon icon={faBorderAll} />
                </div>
                Layout
                <div className="ms-4"></div>
              </div>
            </a>
            <div
              className="collapse"
              id="layoutCollapse"
              data-bs-parent="#Navbar"
            >
              <ul className="drop-menu d-flex flex-column">
                <a className="drop-item d-flex ps-4 me-3 p-2" href="#">
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  Without menu
                </a>
                <a className="drop-item d-flex ps-4 me-3 p-2" href="#">
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  Without navbar
                </a>
                <a className="drop-item d-flex ps-4 me-3 p-2" href="#">
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  Fluid
                </a>
                <a className="drop-item d-flex ps-4 me-3 p-2" href="#">
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  Container
                </a>
                <a className="drop-item d-flex ps-4 me-3 p-2" href="#">
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  Blank
                </a>
              </ul>
            </div>
          </div>

          {/* ------------------ Front Pages Accordion ---------------- */}
          <div>
            <a
              className="d-flex align-items-center"
              data-bs-toggle="collapse"
              href="#fontPagesCollapse"
              aria-expanded="false"
              aria-controls="fontPagesCollapse"
            >
              <div className="common-style d-flex align-items-center">
                <div className="ico me-3 ms-3">
                  <FontAwesomeIcon icon={faHotel} />
                </div>
                Font Pages
              </div>
            </a>
            <div
              className="collapse"
              id="fontPagesCollapse"
              data-bs-parent="#Navbar"
            >
              <ul className="drop-menu d-flex flex-column">
                <a className="drop-item d-flex ps-4 me-3 p-2" href="#">
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  Landing
                </a>
                <a className="drop-item d-flex ps-4 me-3 p-2" href="#">
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  Pricing
                </a>
                <a className="drop-item d-flex ps-4 me-3 p-2" href="#">
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  Payment
                </a>
                <a className="drop-item d-flex ps-4 me-3 p-2" href="#">
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  Checkout
                </a>
                <a className="drop-item d-flex ps-4 me-3 p-2" href="#">
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  Help Center
                </a>
              </ul>
            </div>
          </div>

          {/* ------------------ App & Pages Section ---------------- */}
          <p className="mt-4 text-secondary bg-white text-uppercase">
            - App & Pages
          </p>
          <a href="#" className="d-flex align-items-center">
            <div className="ico me-3 ms-3">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="common-style">Email</div>
          </a>

          <div className="mt-3">
            <a href="#" className="d-flex align-items-center">
              <div className="ico me-3 ms-3">
                <FontAwesomeIcon icon={faComments} />
              </div>
              <div className="common-style">Chat</div>
            </a>
          </div>

          <div className="mt-3">
            <a href="#" className="d-flex align-items-center">
              <div className="ico me-3 ms-3">
                <FontAwesomeIcon icon={faCalendar} />
              </div>
              <div className="common-style">Calendar</div>
            </a>
          </div>

          <div className="mt-3">
            <a href="#" className="d-flex align-items-center">
              <div className="ico me-3 ms-3">
                <FontAwesomeIcon icon={faTableCells} />
              </div>
              <div className="common-style">Kanban</div>
            </a>
          </div>
          {/* ---------------------------Account Setting------------------------- */}
          <div className="mt-3">
            <a
              className="d-flex align-items-center"
              href="#accountCollapse"
              data-bs-toggle="collapse"
              aria-controls="accountCollapse"
              aria-expanded="false"
            >
              <div className="ico me-3 ms-3">
                <FontAwesomeIcon icon={faSquareMinus} />
              </div>
              <div className="common-style">Account Setting</div>
            </a>
            <div
              className="collapse"
              id="accountCollapse"
              data-bs-parent="#Navbar"
            >
              <ul className="drop-menu d-flex flex-column">
                <a className="drop-item d-flex ps-4 me-3 p-2" href="#">
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  Account
                </a>
                <a className="drop-item d-flex ps-4 me-3 p-2" href="#">
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  Notification
                </a>
                <a className="drop-item d-flex ps-4 me-3 p-2" href="#">
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  Connections
                </a>
              </ul>
            </div>
          </div>

          {/* ------------------ Authentication Accordion ---------------- */}
          <div className="mt-3">
            <a
              className="d-flex align-items-center"
              href="#authenCollapse"
              data-bs-toggle="collapse"
            >
              <div className="ico me-3 ms-3">
                <FontAwesomeIcon icon={faUnlockKeyhole} />
              </div>
              <div className="common-style">Authentication</div>
            </a>
            <div
              className="collapse"
              id="authenCollapse"
              data-bs-parent="#Navbar"
            >
              <ul className="drop-menu d-flex flex-column">
                <Link
                  className="drop-item d-flex ps-4 me-3 p-2"
                  target="_blank"
                  to="/login"
                >
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  Login
                </Link>
                <Link className="drop-item d-flex ps-4 me-3 p-2" to="/register">
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  Register
                </Link>
                <Link
                  className="drop-item d-flex ps-4 me-3 p-2"
                  to="/forget-password"
                >
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  Forget password
                </Link>
              </ul>
            </div>
          </div>

          {/* ------------------ Miscellaneous Accordion ---------------- */}
          <div className="mt-3 pb-4">
            <a
              className="d-flex align-items-center"
              href="#miscCollapse"
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="miscCollapse"
            >
              <div className="ico me-3 ms-3">
                <FontAwesomeIcon icon={faDiceD6} />
              </div>
              <div className="common-style">Mics</div>
            </a>
            <div
              className="collapse"
              id="miscCollapse"
              data-bs-parent="#Navbar"
            >
              <ul className="drop-menu d-flex flex-column">
                <a className="drop-item d-flex ps-4 me-3 p-2" href="#">
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  Error
                </a>
                <a className="drop-item d-flex ps-4 me-3 p-2" href="#">
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  Under Maintenance
                </a>
              </ul>
            </div>
          </div>
          {/* ----------------Components------------------ */}
          <p className=" text-secondary bg-white text-uppercase">
            - Components
          </p>
          <a href="#" className="d-flex align-items-center">
            <div className="ico me-3 ms-3">
              <FontAwesomeIcon icon={faCreditCard} />
            </div>
            <div className="common-style">Cards</div>
          </a>

          {/* ---------------------------User Interface------------------------- */}
          <div className="mt-3">
            <a
              className="d-flex align-items-center"
              href="#userCollapse"
              data-bs-toggle="collapse"
              aria-controls="userCollapse"
              aria-expanded="false"
            >
              <div className="ico me-3 ms-3">
                <FontAwesomeIcon icon={faBoxArchive} />
              </div>
              <div className="common-style">User Interface</div>
            </a>
            <div
              className="collapse"
              id="userCollapse"
              data-bs-parent="#Navbar"
            >
              <ul className="drop-menu d-flex flex-column">
                <a className="drop-item d-flex ps-4 me-3 p-2" href="#">
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  Accordion
                </a>
                <a className="drop-item d-flex ps-4 me-3 p-2" href="#">
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  Alerts
                </a>
                <a className="drop-item d-flex ps-4 me-3 p-2" href="#">
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  Badges
                </a>
                <a className="drop-item d-flex ps-4 me-3 p-2" href="#">
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  Buttons
                </a>
                <a className="drop-item d-flex ps-4 me-3 p-2" href="#">
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  Carusel
                </a>
                <a className="drop-item d-flex ps-4 me-3 p-2" href="#">
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  Collapse
                </a>
                <a className="drop-item d-flex ps-4 me-3 p-2" href="#">
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  Dropdown
                </a>
                <a className="drop-item d-flex ps-4 me-3 p-2" href="#">
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  Footer
                </a>
                <a className="drop-item d-flex ps-4 me-3 p-2" href="#">
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  ist groups
                </a>
                <a className="drop-item d-flex ps-4 me-3 p-2" href="#">
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  Modals
                </a>
                <a className="drop-item d-flex ps-4 me-3 p-2" href="#">
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  Navbar
                </a>
                <a className="drop-item d-flex ps-4 me-3 p-2" href="#">
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  Offcanvas
                </a>
                <a className="drop-item d-flex ps-4 me-3 p-2" href="#">
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  Progress
                </a>
              </ul>
            </div>
          </div>

          {/* ------------------ extended ui ---------------- */}
          <div className="mt-3">
            <a
              className="d-flex align-items-center"
              href="#extendedCollapse"
              data-bs-toggle="collapse"
            >
              <div className="ico me-3 ms-3">
                <FontAwesomeIcon icon={faNewspaper} />
              </div>
              <div className="common-style">Extended UI</div>
            </a>
            <div
              className="collapse"
              id="extendedCollapse"
              data-bs-parent="#Navbar"
            >
              <ul className="drop-menu d-flex flex-column">
                <a className="drop-item d-flex ps-4 me-3 p-2" href="#">
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  Perfect Scrollbar
                </a>
                <a className="drop-item d-flex ps-4 me-3 p-2" href="#">
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  Text Divider
                </a>
              </ul>
            </div>
          </div>

          {/* ------------------ Miscellaneous Accordion ---------------- */}

          <div className="mt-3">
            <a href="#" className="d-flex align-items-center">
              <div className="ico me-3 ms-3">
                <FontAwesomeIcon icon={faCrown} />
              </div>
              <div className="common-style">Boxicons</div>
            </a>
          </div>
          {/* -----------------------------Forms & tables-------------------------------- */}
          <p className="mt-4 text-secondary bg-white text-uppercase">
            - Forms & Tables
          </p>

          {/* ------------------ Form Elements ---------------- */}
          <div className="">
            <a
              className="d-flex align-items-center"
              href="#formTCollapse"
              data-bs-toggle="collapse"
            >
              <div className="ico me-3 ms-3">
                <FontAwesomeIcon icon={faRectangleList} />
              </div>
              <div className="common-style">Form Elements</div>
            </a>
            <div
              className="collapse"
              id="formTCollapse"
              data-bs-parent="#Navbar"
            >
              <ul className="drop-menu d-flex flex-column">
                <a className="drop-item d-flex ps-4 me-3 p-2" href="#">
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  Basic Inputs
                </a>
                <a className="drop-item d-flex ps-4 me-3 p-2" href="#">
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  Input Groups
                </a>
              </ul>
            </div>
          </div>
          {/* ------------------ extended ui ---------------- */}
          <div className="mt-3">
            <a
              className="d-flex align-items-center"
              href="#formLCollapse"
              data-bs-toggle="collapse"
            >
              <div className="ico me-3 ms-3">
                <FontAwesomeIcon icon={faIndent} />
              </div>
              <div className="common-style">Form Layouts</div>
            </a>
            <div
              className="collapse"
              id="formLCollapse"
              data-bs-parent="#Navbar"
            >
              <ul className="drop-menu d-flex flex-column">
                <a className="drop-item d-flex ps-4 me-3 p-2" href="#">
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  Vertical Form
                </a>
                <a className="drop-item d-flex ps-4 me-3 p-2" href="#">
                  <div className="text-icon mt-1 me-4">
                    <FontAwesomeIcon icon={faCircle} className="fa-icon" />
                  </div>
                  Horizontal Form
                </a>
              </ul>
            </div>
          </div>
          {/* -----------------------------Non-accordion---------------------- */}
          <div className="mt-3 mb-3">
            <a href="#" className="d-flex align-items-center">
              <div className="ico me-3 ms-3">
                <FontAwesomeIcon icon={faTableCellsRowUnlock} />
              </div>
              <div className="common-style">Form Validation</div>
            </a>
          </div>
          <div className="mt-3 mb-3">
            <a href="#" className="d-flex align-items-center">
              <div className="ico me-3 ms-3">
                <FontAwesomeIcon icon={faCrown} />
              </div>
              <div className="common-style">Tables</div>
            </a>
          </div>
          <div className="mt-3 mb-3">
            <a href="#" className="d-flex align-items-center">
              <div className="ico me-3 ms-3">
                <FontAwesomeIcon icon={faCrown} />
              </div>
              <div className="common-style">Datatables</div>
            </a>
          </div>
          <div className="side position-fixed float-end ">
            <FontAwesomeIcon icon={faCircleArrowRight} />
          </div>
        </div>
      </nav>
    </>
  );
}
