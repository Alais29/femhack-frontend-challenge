import axios from 'axios'
import { baseUrl } from './baseUrl'

export const getCountryDataByYear = async (year) => {
  try {
    const data = await axios.get(`${baseUrl}/year/${year}`)
    return data.data.Data
  } catch (error) {
    console.log(error)
  }
}
