import { countriestLds } from '../utils/countryCodes.js'

/**
 * The function getCountriesWithCode takes an array of country names and returns an array of objects
 * containing the country name, country code, and an image URL of the country's flag.
 * @param countries - An array of country names.
 * @returns a new array of objects. Each object in the array has the properties "id", "name", "code",
 * and "image".
 */
export const getCountriesWithCode = (countries) => {
  const newArray = countries.map((country) => {
    const tld = countriestLds.find((dato) => dato.country === country)

    const code = tld ? tld.tlds[0].substring(1) : ''
    return {
      id: code,
      name: country,
      code: code,
      image: `https://flagcdn.com/w20/${code.toLowerCase()}.png`,
    }
  })

  return newArray
}
