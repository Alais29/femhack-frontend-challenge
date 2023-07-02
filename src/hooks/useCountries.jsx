import { useEffect, useState } from 'react'

import { getCountries } from '../services/getCountries'

const useCountries = () => {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getAllCountries = async () => {
      const countries = await getCountries()
      setCountries(countries)
      setLoading(false)
    }
    try {
      getAllCountries()
    } catch (error) {
      setError(error)
      setLoading(false)
    }
  }, [])

  return {countries, loading, error}
}

export default useCountries
