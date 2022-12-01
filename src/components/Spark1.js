import React from 'react'
import Chart from 'react-apexcharts'

const Spark1 = () => {
  return (
    <div className="col-md-4">
      <div className="box box1">
        <div id="spark1">
          <Chart options={data.options} series={data.series} type="area" height={160} />
        </div>
      </div>
    </div>
  )
}

const data = {
  series: [{
    data: [47, 42, 15, 47, 12, 14, 2, 15, 47, 12, 14, 2, 47, 42, 47, 15, 47, 12, 14, 2, 47, 42, 15, 47, 12, 14, 2, 47, 42,]
  }],
  options: {
    chart: {
      type: 'area',
      height: 160,
      sparkline: {
        enabled: true
      },
    },
    stroke: {
      curve: 'straight'
    },
    fill: {
      opacity: 0.3,
    },
    yaxis: {
      min: 0
    },
    colors: ['#DCE6EC'],
    title: {
      text: '$424,652',
      offsetX: 0,
      style: {
        fontSize: '24px',
      }
    },
    subtitle: {
      text: 'Sales',
      offsetX: 0,
      style: {
        fontSize: '14px',
      }
    }
  },
}

export default Spark1