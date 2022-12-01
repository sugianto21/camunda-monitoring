import React from 'react'
import Chart from 'react-apexcharts'

const Bar = () => {
  return (
    <div className="col-md-6">
      <div className="box">
        <div id="bar">
          <Chart options={data.options} series={data.series} type="bar" height={350} />
        </div>
      </div>
    </div>
  )
}

const data = {
  series: [{
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
  }],
  options: {
    chart: {
      type: 'bar',
      height: 350
    },
    title: {
      text: 'Monthly Sales',
      offsetX: 0,
      style: {
        fontSize: '24px',
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        borderRadiusApplication: 'end',
        horizontal: false,
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
        'United States', 'China', 'Germany'
      ],
    }
  },
};

export default Bar