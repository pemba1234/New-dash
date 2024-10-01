
import "./Crm.css";
import Nav from "../components/Nav";
import Search from "../components/Search";
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
import Stack from '@mui/material/Stack';
import { PieChart } from '@mui/x-charts/PieChart';




const data = [
  { label: 'Group A', value: 400 },
  { label: 'Group B', value: 300 },
  { label: 'Group C', value: 300 },
  { label: 'Group D', value: 200 },
];


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
                id="column1">
             
                   <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, -5.5, 2, -7.5, 1.5, 6],
          area: true,
          baseline: 'min',
        },
      ]}
    
      height={200}
    />
                  
     
                </div>
          
              <div class="col-lg-6 col-12 bg-white shadow mb-3" id="column1">
              <BarChart
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      height={250}
     
    />
              </div>
            </div>
            {/* ---------------another box ------------------ */}
            <div class="d-flex flex-column col-lg-7 col-12">
              <div className="box d-flex col-12 flex-lg-row flex-md-row flex-column">
                <div
                  class="col-lg-6 col-md-5 col-11 bg-white shadow mb-3 me-3"
                  id="column">

<LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 16] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          valueFormatter: (value) => (value == null ? 'NaN' : value.toString()),
        },
        {
          data: [null, null, null, null, 5.5, 2, 8.5, 1.5, 5],
        },
        {
          data: [7, 8, 5, 4, null, null, 2, 5.5, 1],
          valueFormatter: (value) => (value == null ? '?' : value.toString()),
        },
      ]}
      height={200}
      margin={{ top: 35, bottom: 45 }}
    />
                
                </div>
                <div
                  class="col-lg-6 col-md-5 col-11 bg-white shadow mb-3"
                  id="column">
                  <LineChart
  series={[
    { curve: "linear", data: [0, 5, 2, 6, 3, 9.3] },
    { curve: "linear", data: [6, 3, 7, 9.5, 4, 2] },
  ]}
 
/>
                  
    
                </div>
              </div>
              <div
                class="col-lg-12 col-11 bg-white shadow mb-3 ms-lg-2 rounded"
                id="column">
                     <Stack direction="row">
      <PieChart
        series={[
          {
            startAngle: 0,
            endAngle:360,
            paddingAngle: 4,
            innerRadius: 50,
            outerRadius: 70,
            data,
          },
        ]}
        margin={{ right: 5 }}
        height={200}
        slotProps={{
          legend: { hidden: true },
        }}
      />
    </Stack>
                    


              </div>
            </div>
          </div>
          <h1>hello</h1>
          {/* ---------another box--------------------- */}
          {/* <div class="row border mb-3">
            <div class="col-6 border ms-3 me-3 mb-3" id="column">
              Box-6
            </div>
            <div class="col-6 border ms-3 me-3 mb-3" id="column">
              Box-7  
            </div>
          </div> */}
          {/* 
          <div className="col-lg-10">
            <div className="ms-3 col-lg-9 col-12 float-lg-end col-md-12">
              {/* --------------------top box pair------------------ */}
        </div>
      </div>
    </>
  );
}
