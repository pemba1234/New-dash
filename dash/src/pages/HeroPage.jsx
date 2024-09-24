import "./hero.css";
import Man from "../assets/man.png";
import Nav from "../components/Nav";
import Search from "../components/Search";
import { IoPieChart } from "react-icons/io5";
import { BarChart } from "@mui/x-charts/BarChart";
import { FaLongArrowAltUp } from "react-icons/fa";
import { PieChart } from "@mui/x-charts/PieChart";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa6";

// import React, { Component } from "react";

const data = [{ value: 400 }, { value: 300 }, { value: 300 }, { value: 200 }];

export default function HeroPage() {
  return (
    <>
      <Nav />
      <Search />
      <div className="col-lg-11 float-lg-end">
        {/* -------------top div------------ */}
        <div className="parent col-lg-10 d-lg-flex float-end me-4 mt-3 h-auto">
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
          <div className="col-lg-3 col-12 d-flex mt-3 mt-lg-0 h-md-100">
            {/* ----------------------- */}
            <div className="box col-lg-7 col-6 shadow rounded h-100 bg-white me-3 p-4">
              <div className="d-flex justify-content-between">
                <div className="pie p-2 border-0 rounded mb-2">
                  <IoPieChart className="fs-4" />
                </div>
                <div class="dropdown">
                  <a
                    href="#"
                    class="dropdown-toggle"
                    id="dropdownMenu"
                    data-toggle="dropdown"
                  >
                    <BsThreeDotsVertical />
                  </a>
                  <div
                    class="dropdown-menu position-relative bg-secondary"
                    aria-labelledby="dropdownMenu"
                  >
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
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
            <div className="box col-lg-7 col-6 shadow rounded h-100 bg-white me-5"></div>
          </div>
        </div>
        {/* ------------------2nd div---------- */}
        <div className="d-lg-flex mt-3 col-lg-10 col-12 float-lg-end me-4 d-block">
          {/* ----------------- */}
          <div className=" mt-lg-0 d-flex col-lg-8 col-12 me-3">
            <div className="h-auto col-8 bg-white me-1 rounded shadow p-4">
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
            <div className=" h-auto col-4 bg-white rounded shadow">
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
                width={250}
                height={200}
                slotProps={{
                  legend: { hidden: true },
                }}
              />
              <p className="text-secondary ps-5">62% Company Growth</p>
              <div className="">
                <FaDollarSign />
              </div>
            </div>
          </div>
          {/* ------------------------ */}
          <div className="d-lg-flex flex-column col-lg-4 col-12">
            <div className="d-flex col-11 h-50">
              <div className="col-lg-6 col-6 bg-white me-3 shadow rounded"></div>
              <div className="col-lg-6 col-6 bg-white shadow rounded"></div>
            </div>
            <div className="col-12 mt-1 h-50">
              <div className="col-12 bg-white mt-3 shadow rounded h-75"></div>
            </div>
          </div>
          {/* ----------------- */}
        </div>
      </div>
    </>
  );
}
