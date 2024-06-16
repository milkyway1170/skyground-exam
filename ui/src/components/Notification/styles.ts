import { CloseOutlined } from '@mui/icons-material'
import { Box, keyframes, styled, Theme, Typography } from '@mui/material'
import { ClassNameMap } from '@mui/styles'
import { NotificationType } from '@/providers/Notification/Notification.types'

export interface ContainerProps {
  isExit: boolean
}

export function getStylesByType(theme: Theme, type: NotificationType): ClassNameMap<string> {
  switch (type) {
    case NotificationType.Success:
      return {
        backgroundColor: theme.palette.success.light,
        border: `0.2rem solid ${theme.palette.success.main}`
      }
    case NotificationType.Warning:
      return {
        backgroundColor: theme.palette.warning.light,
        border: `0.2rem solid ${theme.palette.warning.main}`
      }
    case NotificationType.Danger:
      return {
        backgroundColor: theme.palette.error.light,
        border: `0.2rem solid ${theme.palette.error.main}`
      }
    case NotificationType.Info:
    default:
      return {
        backgroundColor: theme.palette.info.light,
        border: `0.2rem solid ${theme.palette.info.main}`
      }
  }
}

const leftSlideEffect = keyframes`
  0% {
    margin: 0 0 0 120%
  }
  100% {
    margin: 0
  }`

const rightSlideEffect = keyframes`
  0% {
    margin: 0
  }
  100% {
    margin: 0 0 0 200%
  }`

export const Container = styled(Box)<ContainerProps>(({ isExit }) => ({
  position: 'relative',
  top: '0',
  right: '0',
  width: '100%',
  height: '16rem',
  boxShadow: '0 0.6rem 1.2rem rgba(0, 0, 0, 0.1)',
  borderRadius: '0.4rem',
  padding: '2.4rem 3.3rem 2.4rem 2.5rem',
  animationName: isExit ? `${leftSlideEffect}` : `${rightSlideEffect}`,
  animationDuration: '1s',
  animationDelay: '4s',
  animationFillMode: isExit ? '' : 'forwards'
}))

export const Header = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  margin: '0 0 0.8rem'
})

export const Title = styled(Typography)({
  fontSize: '2rem'
})

export const Icon = styled(CloseOutlined)({
  fontSize: '2rem'
})

export const Body = styled(Box)({
  fontSize: '1.8rem'
})
