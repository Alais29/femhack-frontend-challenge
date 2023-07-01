import axios from 'axios'
import { baseUrl } from './baseUrl'

export const getCountries = async () => {
  try {
    const data = await axios.get(`${baseUrl}/countries`)
    return data.data.Countries
  } catch (error) {
    console.log(error)
  }
}