import { styled, TextField } from '@mui/material'

export const FormTextField = styled(TextField)(({ theme }) => ({
  minWidth: '25rem',

  '& .MuiInputBase-input': {
    fontSize: '1.4rem',
    padding: '1.2rem 1.4rem',
    color: 'inherit'
  },
  '& .MuiFormLabel-root': {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    padding: '0 0.2rem',
    fontSize: '1.4rem',
    lineHeight: '1.5rem'
  },
  '& .Mui-disabled': {
    WebkitTextFillColor: theme.palette.grey[600]
  },
  '& .MuiFormHelperText-root': {
    fontSize: '0.9rem',
    margin: '0.3rem 0.5rem 0 0.5rem'
  }
}))
