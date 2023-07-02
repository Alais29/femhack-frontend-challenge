import WorldMap from 'react-svg-worldmap'
import { useCountryDataByYear } from '../../hooks/useContryDataByYear'
import { countriestLds } from '../../assets/countryCodes'

export const CustomWorldMap = () => {
  const { data, loading, error } = useCountryDataByYear(2020)

  let countriesCodes = {}
  const countryData = data.map((item) => {
    countriestLds.forEach(country => {
      if (country.country === item.country) {
        countriesCodes[item.country] = country.tlds[0].replace('.', '')
      }
    })
    const countryCode = countriesCodes[ item.country ]
    return {
      country: countryCode,
      value: item.users,
    }
  })

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>There was an error loading the data</p>}
      {data.length === 0 && !loading && !error ? (
        <p>There is no data available</p>
      ) : null}
      {!loading && !error && data.length > 0 && (
        <WorldMap
          color='red'
          title='Top 10 Countries with the most Internet Users in 2020'
          value-suffix='people'
          size='responsive'
          data={countryData}
        />
      )}
    </>
  )
}
