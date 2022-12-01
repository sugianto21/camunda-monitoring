import React from 'react'
import Chart from 'react-apexcharts'

const Line = () => {
  return (
    <div className="col-md-6">
      <div className="box">
        <div id="line">
          <Chart options={data.options} series={data.series} type="line" height={350} />
        </div>
      </div>
    </div>
  )
}

const data = {
  series: [{
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
  options: {
    chart: {
      height: 350,
      type: 'line',
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
      text: 'Product Trends by Month',
      offsetX: 0,
      style: {
        fontSize: '24px',
      }
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
  },
};

export default Line