import './App.css'
import CustomTabs from './components/Layout/CustomTabs'
import { UsersYear } from './components/UsersYear'
import { UsersYearCountry } from './components/UsersYearCountry'

export const App = () => {
  return (
      <CustomTabs
        options={[<UsersYear key={0} />, <UsersYearCountry key={1} />]}
        title={['Users x Year', 'Users x Year x Country']} />
  )
}
