import { useState } from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import useCountries from '../../hooks/useCountries';
import { getCountriesWithCode } from '../../utils/getCountriesWithCode.js';


export const CustomSelect = ({ options, title, callback, selectedOption }) => {
  const [value, setValue] = useState(selectedOption)

  const { countries } = useCountries();
  const countriesWithCode = getCountriesWithCode(countries);

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
          {options.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
              <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} >
                <img
                  loading="lazy"
                  width="20"
                  src={`https://flagcdn.com/w20/gb.png`}
                  srcSet={`https://flagcdn.com/w20/gb.png`}
                  alt=""
                />

              </Box>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

CustomSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  selectedOption: PropTypes.string.isRequired,
}
