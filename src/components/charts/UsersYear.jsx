import { getYearsByRange } from '../../utils/getYearsByRange'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { useUsersByYear } from '../../hooks/useUsersByYear'
import { Title } from '../common/Title'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

export const UsersYear = () => {
  const years = getYearsByRange(1980, 2020)
  const { data, loading, error } = useUsersByYear(years)

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  }

  const chartData = {
    labels: years,
    datasets: [
      {
        label: 'Users',
        data,
        backgroundColor: 'rgba(15, 96, 177, 0.5)',
      },
    ],
  }

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>There was an error loading the data</p>}
      {data.length === 0 && !loading && !error ? (
        <p>There is no data available</p>
      ) : null}
      {!loading && !error && data.length > 0 && (
        <div className='chart-container' data-testid='bar-chart'>
          <Title
            title='Internet Users by Year'
            subtitle='In this chart, you can check the number of internet users worldwide by year, spanning from 1980 to 2020.'
          />
          <Bar options={options} data={chartData} />
        </div>
      )}
    </>
  )
}
