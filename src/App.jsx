import './App.css'
import CustomTabs from './components/CustomTabs'
import { UsersYear } from './components/UsersYear'
import { UsersYearCountry } from './components/UsersYearCountry'

export const App = () => {
  return (
    <>
      <CustomTabs
        // eslint-disable-next-line react/jsx-key
        options={[<UsersYear />, <UsersYearCountry />]}
        title={['grafico 1', 'grafico 2']}
      />
    </>
  )
}
