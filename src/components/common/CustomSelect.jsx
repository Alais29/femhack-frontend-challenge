import { useState } from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export const CustomSelect = ({ options, title, callback, selectedOption }) => {
  const [value, setValue] = useState(selectedOption)

  const handleChange = (event) => {
    setValue(event.target.value)
    callback(event.target.value)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>{title}</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={value}
          label={title}
          onChange={handleChange}
        >
          {options?.length > 0 ? options.map((item) => (
            <MenuItem key={item.id} value={item.name}>
              {item.image && (
                <Box
                  component='span'
                  sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                >
                  <img
                    loading='lazy'
                    width='20'
                    src={item.image}
                    srcSet={item.image}
                    alt={`image of ${item.name}`}
                  />
                </Box>
              )}
              {''}
              {item.name}
            </MenuItem>
          )) : ''}
        </Select>
      </FormControl>
    </Box>
  )
}

CustomSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  selectedOption: PropTypes.string.isRequired,
}
