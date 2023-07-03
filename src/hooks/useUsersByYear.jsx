import { useEffect, useState } from 'react'
import { getUsersXYear } from '../services/getUsersXYear'

/**
 * Custom hook that fetches user data for multiple years and returns the data, loading state, and error state.
 * @param years - array of years (as intergers) from which the data will be fetched.
 * @returns The `useUsersByYear` function returns an object with three properties: `data`, `loading`,
 * and `error`.
 */
export const useUsersByYear = (years) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const ApiCallPromise = (year) => {
      return new Promise((resolve, reject) => {
        getUsersXYear(year)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    }

    const promises = years.map((year) => ApiCallPromise(year))

    Promise.all(promises)
      .then((response) => {
        setData(response)
      })
      .catch((error) => {
        console.log('There was an error:', error)
        setError(error)
      })
      .finally(() => setLoading(false))
  }, [])

  return { data, loading, error }
}
