import "./hero.css";
import Man from "../assets/man.png";
import Nav from "../components/Nav";
import Search from "../components/Search";

// logos and chart---------------------------------------
import { IoPieChart } from "react-icons/io5";
import { BarChart } from "@mui/x-charts/BarChart";
import { FaLongArrowAltUp } from "react-icons/fa";
import { PieChart } from "@mui/x-charts/PieChart";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa6";
import { LineChart } from "@mui/x-charts/LineChart";
import { FaFolderOpen } from "react-icons/fa6";
import { IoLogoPaypal } from "react-icons/io5";
import { FaRegCreditCard } from "react-icons/fa";
import { FaFolderMinus } from "react-icons/fa6";

const data = [{ value: 400 }, { value: 300 }, { value: 300 }, { value: 200 }];

export default function HeroPage() {
  return (
    <>
      <Nav />
      <Search />
      <div className="col-lg-11 float-lg-end">
        {/* -------------top div------------ */}
        <div className="parent col-lg-10 d-lg-flex float-end me-4 mt-4 h-auto">
          <div
            className="bg-white border-0 shadow rounded me-lg-3 me-2 p-3
          pb-0 d-flex flex-row justify-content-between col-lg-8 col-12"
          >
            <div className="text bg-white col-6">
              <span className=" fs-4 text-primary bg-white w-50">
                Congratulations John! 🎉
              </span>
              <br />
              <br />
              <span className="inner bg-white">
                You have done 72% more sales today. Check your new badge in your
                profile.
              </span>
              <div className="border mt-3 w-50 bg-white text-primary text-center border-1 border-primary rounded-2 p-1">
                View Badges
              </div>
            </div>
            <div className="float-end">
              <img className="bg-white w-100 col-5 " src={Man} alt="" />
            </div>
          </div>
          <div className="col-lg-3 col-12 mb-lg-0 mb-3 d-flex mt-3 mt-lg-0 h-md-100">
            {/* ----------------------- */}
            <div className="box col-lg-7 col-6 shadow rounded h-100 bg-white me-3 p-4">
              <div className="d-flex justify-content-between">
                <div className="pie p-2 border-0 rounded mb-2">
                  <IoPieChart className="fs-4" />
                </div>
                <div className="dropdown">
                  <BsThreeDotsVertical
                    className="fs-4 p-1"
                    data-bs-toggle="dropdown"
                  />

                  <ul className="dropdown-menu position-absolute  border-1 shadow">
                    <li>
                      <a className="dropdown-item" href="#">
                        View More
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <span className="text-secondary">Profit</span>
              <br />
              <span className="fs-4">$12,628</span>
              <br />
              <br />
              <span className="text-success">
                <FaLongArrowAltUp className="me-2" />
                +72.80%
              </span>
            </div>
            {/* ------------------------- */}
            <div className="box col-lg-7 col-6 shadow rounded h-100 bg-white me-3 p-4">
              <div className="d-flex justify-content-between">
                <div className="folder p-2 border-0 rounded mb-2">
                  <FaFolderOpen className="fs-4" />
                </div>
                <div className="dropdown">
                  <BsThreeDotsVertical
                    className="fs-4 p-1"
                    data-bs-toggle="dropdown"
                  />

                  <ul className="dropdown-menu position-absolute  border-1 shadow">
                    <li>
                      <a className="dropdown-item" href="#">
                        View More
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <span className="text-secondary">Sales</span>
              <br />
              <span className="fs-4">$4,679</span>
              <br />
              <br />
              <span className="text-success">
                <FaLongArrowAltUp className="me-2" />
                +28.80%
              </span>
            </div>
          </div>
        </div>
        {/* ------------------2nd div---------- */}
        <div className="d-lg-flex mt-4 col-lg-10 col-12 float-lg-end me-4 d-block">
          {/* ----------------- */}
          <div className=" mt-lg-0 d-md-flex d-flex flex-column flex-md-row col-lg-8 col-12 me-3">
            <div className="h-auto mb-1 col-md-8 col-12 bg-white me-1 rounded shadow p-4">
              <p className="text-secondary fs-5">Total Revenue</p>
              <BarChart
                series={[{ data: [35, 44, 24, 34, 25, 30, 40] }]}
                height={300}
                xAxis={[
                  {
                    data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
                    scaleType: "band",
                  },
                ]}
                margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
              />
            </div>
            {/* ----------------------------------------------------- */}
            <div className=" h-auto col-md-4 col-12 bg-white rounded shadow mb-lg-0 mb-3">
              <div class="dropdown">
                <button
                  class="btn bg-none border-primary ms-3 mt-4 dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  2024
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li>
                    <a class="dropdown-item" href="#">
                      2023
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      2022
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      2021
                    </a>
                  </li>
                </ul>
              </div>
              <PieChart
                series={[
                  {
                    startAngle: -145,
                    endAngle: 70,
                    paddingAngle: 5,
                    innerRadius: 60,
                    outerRadius: 80,
                    data,
                  },
                ]}
                margin={{ right: 5 }}
                height={200}
                slotProps={{
                  legend: { hidden: true },
                }}
              />
              <p className="text-secondary ps-5">62% Company Growth</p>
              <div className="d-flex mt-5 ms-4">
                <FaDollarSign className="text-white p-2 border border-secondary bg-primary rounded fs-1 mt-2 " />
                <p className="ms-2 text-secondary">
                  2023 <br />
                  $32.5k
                </p>
                <FaFolderMinus className="ms-3 text-white border border-secondary bg-primary p-2 rounded fs-1 mt-2 " />
                <p className="ms-2 text-secondary">
                  2022
                  <br />
                  $41.2k
                </p>
              </div>
            </div>
          </div>
          {/* -------------------------------------------- */}
          <div className="d-lg-flex flex-column col-lg-4 col-12">
            <div className="d-flex col-lg-11">
              <div className="box col-lg-6 h-auto col-6 shadow rounded h-100 bg-white me-3 p-4">
                <div className="d-flex justify-content-between">
                  <div className="paypal p-2 border-0 rounded mb-2">
                    <IoLogoPaypal className="fs-4" />
                  </div>
                  <div className="dropdown">
                    <BsThreeDotsVertical
                      className="fs-4 p-1"
                      data-bs-toggle="dropdown"
                    />

                    <ul className="dropdown-menu position-absolute  border-1 shadow">
                      <li>
                        <a className="dropdown-item" href="#">
                          View More
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <span className="text-secondary">Payments</span>
                <br />
                <span className="fs-4">$2,456</span>
                <br />
                <br />
                <span className="text-danger">
                  <FaLongArrowAltUp className="me-2" />
                  +14.80%
                </span>
              </div>
              {/* ---------------------------------------------- */}
              <div className="box col-lg-6 h-auto col-6 shadow rounded h-100 bg-white me-3 p-4">
                <div className="d-flex justify-content-between">
                  <div className="credit p-2 border-0 rounded mb-2">
                    <FaRegCreditCard className="fs-4" />
                  </div>
                  <div className="dropdown">
                    <BsThreeDotsVertical
                      className="fs-4 p-1"
                      data-bs-toggle="dropdown"
                    />

                    <ul className="dropdown-menu position-absolute  border-1 shadow">
                      <li>
                        <a className="dropdown-item" href="#">
                          View More
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <span className="text-secondary">Transaction</span>
                <br />
                <span className="fs-4">$14,628</span>
                <br />
                <br />
                <span className="text-success">
                  <FaLongArrowAltUp className="me-2" />
                  +28.14%
                </span>
              </div>
            </div>
            {/* ------------------------------------------ */}
            <div className="col-11 shadow text-center d-flex rounded mt-1 h-50 bg-white">
              <div className="">
                <p className="mt-5 fs-5">Profile Report</p>
                <p className="ms-2 text-success border rounded border-success bg-light">
                  Year 2022
                </p>
              </div>
              <LineChart
                series={[
                  {
                    data: [2, 5.5, 2, 3.7, 4.45, 5.5, 8.5, 1.5, 5],
                  },
                ]}
              />
            </div>
            {/* -------------------------------- */}
          </div>
          {/* ------------------------------------------------ */}
        </div>
        {/* ------------------2nd div close----------- */}
        <div className="col-11">
          <div className="d-flex col-10 float-end justify-content-between ">
            <div className="col-3 border  border-success shadow rounded">
              Hello{" "}
            </div>
            <div className="col-3 border  border-success shadow rounded">
              Hello
            </div>
            <div className="col-3 border  border-success shadow rounded">
              Hello
            </div>
          </div>
        </div>
        {/* -----------last div--------------------- */}
      </div>
      {/* -------------------------------------------------- */}
    </>
  );
}
