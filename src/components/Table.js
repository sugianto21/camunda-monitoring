import React from 'react'
import DataTable from 'react-data-table-component';
import './table.css'

const columns = [
  {
    name: 'Title',
    selector: row => row.title,
  },
  {
    name: 'Year',
    selector: row => row.year,
  },
  {
    name: 'Income',
    selector: row => row.income,
  },
];

const data = [
  {
    id: 1,
    title: 'Beetlejuice',
    year: '1988',
    income: '$1.000.000'
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
    income: '$2.300.000'
  },
  {
    id: 132,
    title: 'Beetlejuice',
    year: '1988',
    income: '$1.000.000'
  },
  {
    id: 23431,
    title: 'Ghostbusters',
    year: '1984',
    income: '$2.300.000'
  },
  {
    id: 122424,
    title: 'Beetlejuice',
    year: '1988',
    income: '$1.000.000'
  },
  {
    id: 23145420,
    title: 'Ghostbusters',
    year: '1984',
    income: '$2.300.000'
  },
  {
    id: 1098,
    title: 'Beetlejuice',
    year: '1988',
    income: '$1.000.000'
  },
  {
    id: 26730,
    title: 'Ghostbusters',
    year: '1984',
    income: '$2.300.000'
  },
]

const Table = () => {
  return (
    <DataTable
      className='custom-table'
      columns={columns}
      data={data}
      theme='solarized'
    />
  )
}

export default Table