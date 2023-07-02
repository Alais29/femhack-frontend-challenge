import './App.css'
import { TopCountries } from './components/charts/TopCountries'
import { UsersYear } from './components/charts/UsersYear'
import { UsersYearCountry } from './components/charts/UsersYearCountry'
import { CustomWorldMap } from './components/charts/WorldMap'
import CustomTabs from './components/layout/CustomTabs'


export const App = () => {
  return (
    <>
    <CustomTabs
      options={[
        <UsersYear key={0} />,
        <UsersYearCountry key={1} />,
        <TopCountries key={2} />,
        <CustomWorldMap key={3} />
      ]}
      title={['Users x Year', 'Users x Year x Country', 'Top 10 Countries', 'World Map']}
    />
    </>
  )
}
