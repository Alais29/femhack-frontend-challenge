import { countriestLds } from '../assets/countryCodes.js'

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
