import { FC } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import SearchIcon from '@mui/icons-material/Search'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import theme from '@/utils/theme'

export const StyledSearchBlock = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))

const SearchBlock: FC = () => {
  return (
    <StyledSearchBlock>
      <Autocomplete
        id='auto-complete'
        autoComplete
        includeInputInList
        freeSolo
        disableClearable
        options={[]}
        sx={{ width: '500px' }}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{ backgroundColor: theme.palette.common.white }}
            InputProps={{ startAdornment: <SearchIcon /> }}
          />
        )}
      />
    </StyledSearchBlock>
  )
}

export default SearchBlock
