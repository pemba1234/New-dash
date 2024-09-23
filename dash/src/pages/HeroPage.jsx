import "./hero.css";
import Man from "../assets/man.png";
import Nav from "../components/Nav";
import Search from "../components/Search";

export default function HeroPage() {
  return (
    <>
      <Nav />
      <Search />
      <div className="col-lg-10 float-end">
        <div className="parent col-lg-11 d-flex flex-column float-end me-3 mt-3">
          <div className="bg-white border-0 shadow p-3 d-flex flex-row justify-content-between col-lg-8 col-md-12">
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
              <div className="border mt-3 bg-white text-primary border-1 border-primary rounded-2 p-1">
                View Badges
              </div>
            </div>
            <div className="float-end">
              <img className="bg-white " src={Man} alt="" />
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
}
