import { useState } from 'react'
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
import useAnimation from '../hooks/useAnimation'

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

  const { currentYear, setCurrentYear } = useAnimation(country)

  const handleChange = (value) => {
    setCountry(value)
    setCurrentYear(1980)
  }

  const data = {
    labels: years.slice(0, currentYear - 1980 + 1),
    datasets: [
      {
        label: country,
        data: internetUsersNumber.slice(0, currentYear - 1980 + 1),
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
