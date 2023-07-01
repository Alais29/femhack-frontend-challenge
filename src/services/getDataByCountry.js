import axios from 'axios'
import { baseUrl } from './baseUrl'

export const getDataByCountry = async (country) => {
  try {
    const data = await axios.get(`${baseUrl}/country/${country}`)
    return data.data.Data
  } catch (error) {
    console.log(error)
  }
}
