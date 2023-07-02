import { useState } from 'react'
import useCountries from '../../hooks/useCountries'
import useDataByCountry from '../../hooks/useDatabyCountry'
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
import { getYearsByRange } from '../../utils/getYearsByRange'
import { Line } from 'react-chartjs-2'
import { CustomSelect } from '../common/CustomSelect'
import useAnimation from '../../hooks/useAnimation'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)

const options = {
  maintainAspectRatio: false,
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
  const [country, setCountry] = useState('Chile')

  const {
    countries,
    loading: countriesLoading,
    error: countriesError,
  } = useCountries()
  const { data, loading, error } = useDataByCountry(country)
  const internetUsersNumber = data.map(
    (item) => item.data.internet_users_number,
  )
  const years = getYearsByRange(1980, 2020)

  const { currentYear, setCurrentYear } = useAnimation(country)

  const handleChange = (value) => {
    setCountry(value)
    setCurrentYear(1980)
  }

  const chartData = {
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
      {countriesLoading && <p>Loading...</p>}
      {countriesError && <p>There was an error loading the data</p>}
      {countries.length === 0 && !countriesLoading && !countriesError ? (
        <p>There is no data available</p>
      ) : null}
      {!countriesLoading && !countriesError && countries.length > 0 && (
        <CustomSelect
          options={countries}
          title={'Country'}
          callback={handleChange}
          selectedOption={country}
        />
      )}

      {loading && <p>Loading...</p>}
      {error && <p>There was an error loading the data</p>}
      {data.length === 0 && !loading && !error ? (
        <p>There is no data available</p>
      ) : null}
      {!loading && !error && data.length > 0 && (
        <div className='chart-container'>
          <Line options={options} data={chartData} />
        </div>
      )}
    </>
  )
}
