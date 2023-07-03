import WorldMap from 'react-svg-worldmap'
import { useCountryDataByYear } from '../../hooks/useContryDataByYear'
import { countriestLds } from '../../utils/countryCodes'
import { Title } from '../common/Title'

export const CustomWorldMap = () => {
  const { data, loading, error } = useCountryDataByYear(2020)

  let countriesCodes = {}
  const countryData = data.map((item) => {
    countriestLds.forEach((country) => {
      if (country.country === item.country) {
        countriesCodes[item.country] = country.tlds[0].replace('.', '')
      }
    })
    const countryCode = countriesCodes[item.country]
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
        <>
          <Title
            title='Top 10 Countries in 2020'
            subtitle='In this map, you can explore the top 10 countries with the highest number of internet users in 2020. By hovering over each country, you can view the corresponding number of users.'
          />
          <div className='map-container' data-testid='world-map'>
            <WorldMap
              value-suffix='people'
              size='responsive'
              data={countryData}
              color='#0f60b1'
            />
          </div>
        </>
      )}
    </>
  )
}
