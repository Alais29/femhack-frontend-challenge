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
      <div>Map</div>
      <WorldMap
        color="red"
        title="Top 10 Populous Countries"
        value-suffix="people"
        size="lg"
        data={countryData}
      />
    </>
  )
}
