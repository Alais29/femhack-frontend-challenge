import axios from 'axios'
import { baseUrl } from './baseUrl'

/**
 * An asynchronous function that makes a GET request to retrieve a list of
 * countries from a specified base URL.
 * @returns the array of countries from the response data.
 */
export const getCountries = async () => {
  try {
    const data = await axios.get(`${baseUrl}/countries`)
    return data.data.Countries
  } catch (error) {
    console.log(error)
  }
}
