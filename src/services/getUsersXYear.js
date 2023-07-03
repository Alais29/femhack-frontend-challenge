import axios from 'axios'
import { baseUrl } from './baseUrl'

/**
 * An asynchronous function that retrieves the total number of internet users for a given year.
 * @param year - number, the year for which you want to retrieve the number of internet users.
 * @returns number, the total number of internet users for a specific year.
 */
export const getUsersXYear = async (year) => {
  try {
    const data = await axios.get(`${baseUrl}/internet-users/${year}`)
    return data.data.Data.Total
  } catch (error) {
    console.log(error)
  }
}
