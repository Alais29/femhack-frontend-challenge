import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '../../assets/menu.svg'
import ChevronLeft from '../../assets/chevronLeft.svg'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { UsersYearCountry } from '../charts/UsersYearCountry'
import { UsersYear } from '../charts/UsersYear'
import { TopCountries } from '../charts/TopCountries'
import { CustomWorldMap } from '../charts/CustomWorldMap'
import logo from '../../assets/logo.png'
import github from '../../assets/github-logo.png'

const drawerWidth = 240

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
)

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

export default function PersistentDrawerLeft() {
  const [open, setOpen] = React.useState(true)
  const [selected, setSelected] = React.useState(0)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position='fixed' open={open}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <img
              src={MenuIcon}
              alt='Menu Icon'
              style={{ width: '30px', height: '30px' }}
            />
          </IconButton>
          <Typography variant='h6' noWrap component='h1'>
            React Divas  
            <img
              src={logo}
              alt='Chevron Left'
              style={{ width: '35px', height: '35px' }}
            /> - Femhack Frontend Challenge
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant='persistent'
        anchor='left'
        open={open}
      >
        <Box className='drawer-container'>
          <Box>
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                <img
                  src={ChevronLeft}
                  alt='Chevron Left'
                  style={{ width: '30px', height: '30px' }}
                />
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              {[
                'Users x Year',
                'Users x Year x Country',
                'Top 10 Countries',
                'World Map',
              ].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton onClick={() => setSelected(index)}>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>

          <Box sx={{ color: '#42a5f5' }}>
            <Divider />
            <Box
              sx={{
                padding: '0.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img src={logo} alt='logo' style={{ width: '50px', height: '50px' }} />
              <a href='https://github.com/Alais29/femhack-frontend-challenge'>
                <Typography variant='caption' noWrap component='div'>
                  React Divas - FemHack
                  <span>
                    <img
                      src={github}
                      alt='github'
                      style={{ width: '15px', height: '15px', marginLeft: '0.5rem' }}
                    />
                  </span>
                </Typography>
              </a>

              <a href='https://github.com/Alais29'>
                <Typography variant='caption' noWrap component='div'>
                  Alfonsina Lizardo
                  <span>
                    <img
                      src={github}
                      alt='github'
                      style={{ width: '15px', height: '15px', marginLeft: '0.5rem' }}
                    />
                  </span>
                </Typography>
              </a>
              <a href='https://github.com/Dereemii'>
                <Typography variant='caption' noWrap component='div'>
                  Leslie Herrera
                  <span>
                    <img
                      src={github}
                      alt='github'
                      style={{ width: '15px', height: '15px', marginLeft: '0.5rem' }}
                    />
                  </span>
                </Typography>
              </a>
            </Box>
          </Box>
        </Box>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {selected === 0 && <UsersYear />}
        {selected === 1 && <UsersYearCountry />}
        {selected === 2 && <TopCountries />}
        {selected === 3 && <CustomWorldMap />}
      </Main>
    </Box>
  )
}
