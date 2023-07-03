import axios from 'axios'
import { baseUrl } from './baseUrl'

/**
 * An asynchronous function that retrieves data for a specific country from an API endpoint and returns the data.
 * @param country - string, that represents the name of the country for which you want to retrieve data.
 * @returns an object where the keys are the years and the value is an object with the
 * internet_users_percentatge and internet_users_number properties
 */
export const getDataByCountry = async (country) => {
  try {
    const data = await axios.get(`${baseUrl}/country/${country}`)
    return data.data.Data
  } catch (error) {
    console.log(error)
  }
}
