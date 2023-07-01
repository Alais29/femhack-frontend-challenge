import { useEffect, useState } from 'react'

import { getCountries } from '../../services/getCountries'

const useCountries = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const getAllCountries = async () => {
      const countries = await getCountries()
      setCountries(countries)
    }

    getAllCountries()
  }, [])

  return countries
}

export default useCountries
