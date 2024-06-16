import React, { ReactElement } from 'react'
import { CircularProgress } from '@mui/material'
import { Container } from './styles'

export default function Loader(): ReactElement {
  return (
    <Container>
      <CircularProgress />
    </Container>
  )
}
