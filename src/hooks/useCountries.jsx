import { useEffect, useState } from 'react'

import { getCountries } from '../services/getCountries'
import { getCountriesWithCode } from '../utils/getCountriesWithCode'

/**
 * Custom hook that fetches a list of countries, formats them with country codes, 
 * and returns the countries, loading state, and error state.
 * @returns An object with three properties: `countries`, `loading`, and `error`.
 */
const useCountries = () => {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getAllCountries = async () => {
      const countries = await getCountries()
      const countriesFormated = getCountriesWithCode(countries)
      setCountries(countriesFormated)
      setLoading(false)
    }
    try {
      getAllCountries()
    } catch (error) {
      setError(error)
      setLoading(false)
    }
  }, [])

  return { countries, loading, error }
}

export default useCountries
