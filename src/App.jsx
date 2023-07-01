import './App.css'
import { TopCountries } from './components/TopCountries'
import { UsersYear } from './components/UsersYear'
import { UsersYearCountry } from './components/UsersYearCountry'

export const App = () => {
  return (
    <>
      <UsersYear />
      <UsersYearCountry />
      <TopCountries />
    </>
  )
}
