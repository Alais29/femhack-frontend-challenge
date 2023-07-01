import './App.css'
import { TopCountries } from './components/Charts/TopCountries'
import { UsersYear } from './components/Charts/UsersYear'
import { UsersYearCountry } from './components/Charts/UsersYearCountry'

import CustomTabs from './components/Layout/CustomTabs'


export const App = () => {
  return (
    <CustomTabs
      options={[
        <UsersYear key={0} />,
        <UsersYearCountry key={1} />,
        <TopCountries key={2} />,
      ]}
      title={['Users x Year', 'Users x Year x Country', 'Top 10 Countries']}
    />
  )
}
