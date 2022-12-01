import React from 'react'
import Chart from 'react-apexcharts'

const Donut = () => {
  return (
    <div className="col-md-6">
      <div className="box">
        <div id="donut">
          <Chart options={data.options} series={data.series} type="donut" />
        </div>
      </div>
    </div>
  )
}

const data = {
  series: [44, 55, 41, 17, 15],
  options: {
    chart: {
      type: 'donut',
    },
    width: 160,
    legend: {
      position: 'bottom',
    },
    title: {
      text: 'Department Sales',
      offsetX: 0,
      style: {
        fontSize: '24px',
      }
    },
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 160
      },
      legend: {
        position: 'left'
      },
      title: {
        text: 'Department Sales',
        offsetX: 0,
        style: {
          fontSize: '24px',
        }
      },
    }
  }]
}

export default Donut