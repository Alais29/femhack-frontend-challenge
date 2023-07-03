import axios from 'axios'
import { baseUrl } from './baseUrl'

/**
 * An asynchronous function that retrieves country data for a specific year from an API endpoint
 * and returns the data.
 * @param year - number, the year for which you want to retrieve country data.
 * @returns an object where the keys are the countries names and the value is an object with the
 * internet_users_percentatge and internet_users_number properties
 */
export const getCountryDataByYear = async (year) => {
  try {
    const data = await axios.get(`${baseUrl}/year/${year}`)
    return data.data.Data
  } catch (error) {
    console.log(error)
  }
}
