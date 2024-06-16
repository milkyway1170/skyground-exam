import React, { PropsWithChildren, ReactElement, useReducer } from 'react'
import Notification from '@/components/Notification'
import { NotificationContext } from '@/contexts/notification'
import { IActionType, INotification } from './Notification.types'
import { Сontainer } from './styles'

export default function NotificationProvider({ children }: PropsWithChildren): ReactElement {
  const [state, dispatch] = useReducer((state: INotification[], action: IActionType) => {
    switch (action.type) {
      case 'ADD_NOTIFICATION':
        return [...state, { ...action.payload }]
      case 'REMOVE_NOTIFICATION':
        return state.filter(item => item.id !== action.payload.id)
      default:
        return state
    }
  }, [])

  return (
    <NotificationContext.Provider value={dispatch}>
      <Сontainer>
        {state.map(note => (
          <Notification dispatch={dispatch} key={note.id} {...note} />
        ))}
      </Сontainer>
      {children}
    </NotificationContext.Provider>
  )
}
