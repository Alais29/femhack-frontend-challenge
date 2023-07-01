import { useEffect, useState } from 'react';
import { getUsersXYear } from '../services/getUsersXYear';

/**
 * Takes an array of years as input and returns a state variable `data` that holds
 * the response data from an API call for each year.
 * @returns The `data` state variable.
 */
export const useUsersByYear = (years) => {
  const [data, setData] = useState([])

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
      })
  }, [])

  return data
}
