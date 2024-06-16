import React, { Dispatch, ReactElement, useCallback, useEffect, useState } from 'react'
import { Box, IconButton, useTheme } from '@mui/material'
import { ActionTypes, IActionType, INotification, NotificationType } from '@/providers/Notification/Notification.types'
import { getStylesByType, Container, Header, Icon, Title, Body } from './styles'

interface INotificationProps extends INotification {
  dispatch: Dispatch<IActionType>
}

const DEFAULT_TYPE = NotificationType.Info
const NOTIFICATION_LIFETIME = 20
const INTERVAL_DURATION = 500

export default function Notification({
  id,
  title,
  message,
  type = DEFAULT_TYPE,
  dispatch
}: INotificationProps): ReactElement {
  const theme = useTheme()
  const [isExit, setIsExit] = useState<boolean>(false)
  const [lifeTime, setLifeTime] = useState<number>(NOTIFICATION_LIFETIME)

  const setNewLifeTime = (newIntervalId: NodeJS.Timeout): void =>
    setLifeTime(prev => {
      if (prev > 0) return prev - 1

      clearInterval(newIntervalId)
      return prev
    })

  const handleStartTimer = useCallback((): void => {
    const newIntervalId = setInterval(() => {
      setNewLifeTime(newIntervalId)
    }, INTERVAL_DURATION)
  }, [])

  const handleCloseNotification = useCallback((): void => {
    setIsExit(true)
    dispatch({
      type: ActionTypes.RemoveNotification,
      payload: {
        id
      }
    })
  }, [dispatch, id])

  useEffect(() => {
    if (lifeTime === 0) handleCloseNotification()
  }, [handleCloseNotification, lifeTime])

  useEffect(() => {
    handleStartTimer()
  }, [handleStartTimer])

  return (
    <Container id={id} isExit={isExit} sx={{ ...getStylesByType(theme, type) }} onMouseEnter={handleStartTimer}>
      <Header>
        <Box>
          <Title>{title}</Title>
        </Box>
        <IconButton onClick={handleCloseNotification}>
          <Icon />
        </IconButton>
      </Header>
      <Body>{message}</Body>
    </Container>
  )
}
