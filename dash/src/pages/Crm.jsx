import "./Crm.css";
import Nav from "../components/Nav";
import Search from "../components/Search";

export default function Crm() {
  return (
    <>
      <Nav />
      <Search />
      <div className="col-lg-10">
        <div className="mt-4 ms-3 col-lg-9 col-12 float-lg-end col-md-12">
          {/* --------------------top box pair------------------ */}
          <div className="d-lg-flex col-lg-10 col-md-12">
            <div class="col-11 ms-lg-4 me-2 col-lg-9 mb-3 mb-lg-0 d-lg-flex ms-lg-2 me-3 me-lg-5">
              <div
                class="col-lg-6 col-12 bg-white shadow me-3 mb-3"
                id="column1"
              >
                Box-1
              </div>
              <div class="col-lg-6 col-12 bg-white shadow mb-3" id="column1">
                Box-2
              </div>
            </div>
            {/* ---------------another box ------------------ */}
            <div class="d-flex flex-column col-lg-7 col-12">
              <div className="box d-flex col-12 flex-lg-row flex-md-row flex-column">
                <div
                  class="col-lg-6 col-md-5 col-11 bg-white shadow mb-3 me-3"
                  id="column"
                >
                  Box-3
                </div>
                <div
                  class="col-lg-6 col-md-5 col-11 bg-white shadow mb-3"
                  id="column"
                >
                  Box-4
                </div>
              </div>
              <div
                class="col-lg-12 col-11 bg-white shadow mb-3 ms-lg-2 rounded"
                id="column"
              >
                Box-5
              </div>
            </div>
          </div>
          {/* ---------another box--------------------- */}
          {/* <div class="row border mb-3">
            <div class="col-6 border ms-3 me-3 mb-3" id="column">
              Box-6
            </div>
            <div class="col-6 border ms-3 me-3 mb-3" id="column">
              Box-7  
            </div>
          </div> */}

          <div
            class="col-lg-7 col-12 bg-white shadow me-3 mb-3 ms-4 rounded"
            id="column2"
          >
            Box-1
            <div class="d-flex flex-column  col-lg-7 col-12">
              <div className="box d-flex col-12 flex-lg-row flex-md-row flex-column">
                <div
                  class="col-lg-6 col-md-5 col-11 bg-white shadow mb-3 me-3 rounded"
                  id="column3"
                >
                  Box-5
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div
                    className=" col-sm-9 border-1 shadow bg-white rounded "
                    id="column4"
                  >
                    column
                  </div>
                  <div
                    className=" col-sm-9 border-1 shadow  bg-white  rounded "
                    id="column5"
                  >
                    column
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
