import React from 'react'
import Chart from 'react-apexcharts'

const Spark3 = () => {
  return (
    <div className="col-md-4">
      <div className="box box3">
        <div id="spark3">
          <Chart options={data.optionsSpark3} series={data.seriesSpark3} type="area" height={160} />
        </div>
      </div>
    </div>
  )
}

const data = {
  seriesSpark3: [{
    data: [47, 42, 15, 47, 12, 14, 2, 15, 47, 12, 14, 2, 47, 42, 47, 15, 47, 12, 14, 2, 47, 42, 15, 47, 12, 14, 2, 47, 42,]
  }],
  optionsSpark3: {
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
      opacity: 0.3
    },
    xaxis: {
      crosshairs: {
        width: 1
      },
    },
    yaxis: {
      min: 0
    },
    title: {
      text: '$135,965',
      offsetX: 0,
      style: {
        fontSize: '24px',
      }
    },
    subtitle: {
      text: 'Profits',
      offsetX: 0,
      style: {
        fontSize: '14px',
      }
    }
  },
}

export default Spark3