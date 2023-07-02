import { useEffect, useState } from 'react'
import { getDataByCountry } from '../services/getDataByCountry'

/**
 * Custom hook that fetches and formats data for a specific returning the data, loading state, and error state.
 * @param country - string, The country to fetch data for.
 * @returns An object with three properties: `data`, `loading`, and `error`.
 */
const useDataByCountry = (country) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getAllDataByCountry = async () => {
      const rawData = await getDataByCountry(country)

      const initialData = {}

      for (let year = 1980; year <= 2020; year++) {
        initialData[year] = {
          internet_users_percentatge: 0,
          internet_users_number: 0,
        }
      }

      const mergedData = { ...initialData, ...rawData }
      for (const year in mergedData) {
        if (mergedData[year] === undefined) {
          mergedData[year] = 0
        }
      }
      const formatedData = Object.entries(mergedData).map(([year, data]) => ({
        year,
        data,
      }))

      setData(formatedData)
      setLoading(false)
    }
    try {
      getAllDataByCountry()
    } catch (error) {
      setError(error)
      setLoading(false)
    }
  }, [country])

  return { data, loading, error }
}

export default useDataByCountry
