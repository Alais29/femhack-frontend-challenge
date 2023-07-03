import { Typography } from '@mui/material'
import PropTypes from 'prop-types'

export const Title = ({ title, subtitle }) => {
  return (
    <>
      <Typography
        align='center'
        variant='h6'
        component='h2'
        sx={{ color: '#1976d2' }}
        gutterBottom
      >
        {title}
      </Typography>
      <Typography align='center' variant='subtitle1' gutterBottom>
        {subtitle}
      </Typography>
    </>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}
