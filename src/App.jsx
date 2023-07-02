import './App.css'

import PersistentDrawerLeft from './components/layout/PersistentDrawerLeft'
import { Container } from '@mui/material'

export const App = () => {
  return (
    <Container disableGutters>
      <PersistentDrawerLeft />
    </Container>
  )
}
