import { getYearsByRange } from '../../utils/getYearsByRange'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { useUsersByYear } from '../../hooks/useUsersByYear'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const UsersYear = () => {
  const years = getYearsByRange(1980, 2020)
  const { data, loading, error } = useUsersByYear(years)

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Internet Users By Year',
      },
    },
  }

  const chartData = {
    labels: years,
    datasets: [
      {
        label: 'Users',
        data,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
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
        <Bar options={options} data={chartData} />
      )}
    </>
  )
}
