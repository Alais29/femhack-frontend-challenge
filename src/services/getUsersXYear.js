import axios from 'axios'
import { baseUrl } from './baseUrl'

export const getUsersXYear = async (year) => {
  try {
    const data = await axios.get(`${baseUrl}/internet-users/${year}`)
    return data.data.Data.Total
  } catch (error) {
    console.log(error)
  }
}