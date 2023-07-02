import { useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { CustomSelect } from '../common/CustomSelect'
import { getYearsByRange } from '../../utils/getYearsByRange'
import { useCountryDataByYear } from '../../hooks/useContryDataByYear'
import { Container } from '@mui/material'

ChartJS.register(ArcElement, Tooltip, Legend)

export const TopCountries = () => {
  const [year, setYear] = useState(2020)
  const { data, loading, error } = useCountryDataByYear(year)

  const years = getYearsByRange(1980, 2020).map((item) => String(item))

  const handleChange = (value) => {
    setYear(Number(value))
  }

  const chartData = {
    labels: data?.map((item) => item.country),
    datasets: [
      {
        label: '# of Users',
        data: data?.map((item) => item.users),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  return (
    <>
      <CustomSelect
        options={years}
        title='Year'
        callback={handleChange}
        selectedOption={String(year)}
      />
      {loading && <p>Loading...</p>}
      {error && <p>There was an error loading the data</p>}
      {!loading && !error && data.length === 0 ? (
        <p>There is no data available</p>
      ) : (
        <Container maxWidth='sm'>
          <Pie data={chartData} key={year} />
        </Container>
      )}
    </>
  )
}
