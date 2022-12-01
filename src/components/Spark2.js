import React from 'react'
import Chart from 'react-apexcharts'

const Spark2 = () => {
  return (
    <div className="col-md-4">
      <div className="box box2">
        <div id="spark2">
          <Chart options={data.optionsSpark2} series={data.seriesSpark2} type="area" height={160} />
        </div>
      </div>
    </div>
  )
}

const data = {
  seriesSpark2: [{
    data: [47, 42, 15, 47, 12, 14, 2, 15, 47, 12, 14, 2, 47, 42, 47, 15, 47, 12, 14, 2, 47, 42, 15, 47, 12, 14, 2, 47, 42,]
  }],
  optionsSpark2: {
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
      text: '$235,312',
      offsetX: 0,
      style: {
        fontSize: '24px',
      }
    },
    subtitle: {
      text: 'Expenses',
      offsetX: 0,
      style: {
        fontSize: '14px',
      }
    }
  },
}

export default Spark2