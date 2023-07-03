import { useState } from 'react'
import useCountries from '../../hooks/useCountries'
import useDataByCountry from '../../hooks/useDatabyCountry'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js'
import { getYearsByRange } from '../../utils/getYearsByRange'
import { Line } from 'react-chartjs-2'
import { CustomSelect } from '../common/CustomSelect'
import useAnimation from '../../hooks/useAnimation'
import { Title } from '../common/Title'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
)

const options = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
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

  const { currentYear, setCurrentYear } = useAnimation()

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
        borderColor: 'rgb(15, 96, 177)',
        backgroundColor: 'rgba(15, 96, 177, 0.5)',
      },
    ],
  }

  return (
    <>
      <Title
        title='Internet Users by Year by Country'
        subtitle='In this chart, you can check the number of internet users by year and by country. Please choose the country for which you would like to view the data.'
      />
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

      {loading && <p>Loading Chart...</p>}
      {error && <p>There was an error loading the data</p>}
      {data.length === 0 && !loading && !error ? (
        <p>There is no data available</p>
      ) : null}
      {!loading && !error && data.length > 0 && (
        <div className='chart-container' data-testid='line-chart'>
          <Line options={options} data={chartData} />
        </div>
      )}
    </>
  )
}
