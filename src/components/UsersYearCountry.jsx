import useCountries from '../hooks/useCountries'
import useDataByCountry from '../hooks/useDatabyCountry'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { getYearsByRange } from '../utils/getYearsByRange'

import { Line } from 'react-chartjs-2'
import { CustomSelect } from './CustomSelect'
import { useState } from 'react'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
}

export const UsersYearCountry = () => {
  const [country, setCountry] = useState('United States')

  const countries = useCountries()
  const dataByCountry = useDataByCountry(country)
  const internetUsersNumber = dataByCountry.map(
    (item) => item.data.internet_users_number,
  )
  const years = getYearsByRange(1980, 2020)

  const handleChange = (value) => {
    setCountry(value)
  }

  const data = {
    labels: years,
    datasets: [
      {
        label: country,
        data: internetUsersNumber,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }

  return (
    <>
      <CustomSelect
        options={countries}
        title={'Country'}
        callback={handleChange}
        selectedOption={country}
      />
      <Line options={options} data={data} />
    </>
  )
}
