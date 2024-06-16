import { Dispatch, createContext, useContext } from 'react'
import { IActionType } from '@/providers/Notification/Notification.types'

type NotificationContextT = Dispatch<IActionType> | null

export const NotificationContext = createContext<NotificationContextT>(null)

export const useNotificationContext = (): NotificationContextT => useContext(NotificationContext)
