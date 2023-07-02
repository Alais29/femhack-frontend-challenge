import { useEffect, useState } from 'react'

import { getCountries } from '../services/getCountries'
import { getCountriesWithCode } from '../utils/getCountriesWithCode'

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
