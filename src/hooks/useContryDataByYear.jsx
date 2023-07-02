import { useState, useEffect } from 'react'
import { getCountryDataByYear } from '../services/getCountryDataByYear'

/**
 * Custom hook that retrieves countries data for a specific year, sorts it by the number of internet users,
 * and returns the top 10 countries with the highest number of internet users.
 * @param year - interger, The year for which to retrieve the countries data.
 * @returns The function `useCountryDataByYear` returns an object with three properties: `data`,
 * `loading`, and `error`.
 */
export const useCountryDataByYear = (year) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    getCountryDataByYear(year)
      .then((apiData) => {
        const countriesSortedByUsers = Object.entries(apiData)
          .map(([country, data]) => ({
            country,
            users: data.internet_users_number,
          }))
          .sort((a, b) => b.users - a.users)
          .slice(0, 10)

        const areThereNoUsers = countriesSortedByUsers.every(
          (country) => country.users === 0,
        )
        setData(areThereNoUsers ? [] : countriesSortedByUsers)
      })
      .catch((error) => {
        console.log(error)
        setError(error)
      })
      .finally(() => setLoading(false))
  }, [year])

  return { data, loading, error }
}
