import Area from "./components/Area";
import Bar from "./components/Bar";
import Donut from "./components/Donut";
import Line from "./components/Line";
import Spark1 from "./components/Spark1";
import Spark2 from "./components/Spark2";
import Spark3 from "./components/Spark3";
import Table from "./components/Table";

function App() {
  return (
    <div id="wrapper">
      <div className="content-area">
        <div className="container-fluid">
          <div className="main">
            <div className="row sparkboxes mt-4 mb-4">
              <Spark1 />
              <Spark2 />
              <Spark3 />
            </div>

            <div className="row mt-5 mb-4">
              <Bar />
              <Donut />
            </div>

            <div className="row mt-4 mb-4">
              <Area />
              <Line />
            </div>

            <div className="row mt-4 mb-4">
              <div className="col-md-12">
                <div className="box-table">
                  <Table />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
