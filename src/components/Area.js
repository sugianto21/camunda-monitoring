import React from 'react'
import Chart from 'react-apexcharts'

const Area = () => {
  return (
    <div className="col-md-6">
      <div className="box">
        <div id="area">
          <Chart options={data.options} series={data.series} type="area" height={350} />
        </div>
      </div>
    </div>
  )
}

const data = {

  series: [{
    name: "STOCK ABC",
    data: [9340.85, 8881.1, 8600.65, 8496.25, 8512.9, 8607.55, 8602.3, 8668.95, 8626.2, 8506.9, 8487.7, 8481.85, 8514.3, 8423.5, 8340.7, 8165.5, 8122.9, 8128.0, 8107.85,]
  }],
  options: {
    chart: {
      type: 'area',
      height: 350,
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },

    title: {
      text: 'Analysis of Stocks',
      offsetX: 0,
      style: {
        fontSize: '24px',
      }
    },
    // subtitle: {
    //   text: 'Price Movements',
    //   align: 'left'
    // },
    labels: ["13 Nov 2017", "14 Nov 2017", "15 Nov 2017", "16 Nov 2017", "17 Nov 2017", "20 Nov 2017", "21 Nov 2017", "22 Nov 2017", "23 Nov 2017", "24 Nov 2017", "27 Nov 2017", "28 Nov 2017", "29 Nov 2017", "30 Nov 2017", "01 Dec 2017", "04 Dec 2017", "05 Dec 2017", "06 Dec 2017", "07 Dec 2017", "08 Dec 2017"],
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      opposite: false
    },
    legend: {
      horizontalAlign: 'left'
    }
  },


};

export default Area