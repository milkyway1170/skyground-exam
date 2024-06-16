import { Box, styled, Typography } from '@mui/material'

export const Container = styled(Box)({
  display: 'flex',
  margin: '2rem auto',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center'
})

export const Title = styled(Typography)(({ theme }) => ({
  padding: '1rem 1.5rem',
  borderRadius: '1rem',
  backgroundColor: theme.palette.background.default
}))
