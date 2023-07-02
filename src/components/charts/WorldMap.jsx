import WorldMap from "react-svg-worldmap";
import { useCountryDataByYear } from "../../hooks/useContryDataByYear";

export const CustomWorldMap = () => {
  const { data, loading, error } = useCountryDataByYear(2020)

  const countryCodeMapping = {
    'China': 'cn',
    'India': 'in',
    'United States': 'us',
    'Indonesia': 'id',
    'Japan': 'jp',
    'Brazil': 'br',
    "Germany": "de",
    "Egypt": "eg",
    "Russia": "ru",
    "Mexico": "mx",
  }

  const countryData = data.map(item => {
    const countryCode = countryCodeMapping[item.country];
    return {
      country: countryCode,
      value: item.users
    };
  });

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>There was an error loading the data</p>}
      {data.length === 0 && !loading && !error ? (
        <p>There is no data available</p>
      ) : null}
      {!loading && !error && data.length > 0 && (
        <WorldMap
          color="red"
          title="Top 10 Countries with the most Internet Users in 2020"
          value-suffix="people"
          size="xl"
          data={countryData}
        />
      )}
    </>
  )
}
