import { Box, styled } from '@mui/material'

export const Сontainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  fontSize: '1.2rem',
  '*::-webkit-scrollbar': {
    width: '0.5rem',
    height: '0.5rem'
  },
  '*::-webkit-scrollbar-track': {
    backgroundColor: theme.palette.background.paper
  },
  '*::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.grey[300],
    borderRadius: 10
  }
}))

export const Content = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  backgroundColor: theme.palette.background.paper,
  padding: '3rem 3rem 0',
  overflowX: 'hidden'
}))
