import { v4 } from 'uuid'
import { useNotificationContext } from '../contexts/notification'
import { ActionTypes, INotification } from '../providers/Notification/Notification.types'

type useNotificationResponseT = (props: NotificationPropsT) => void
type NotificationPropsT = Omit<INotification, 'id'>

export const useNotification = (): useNotificationResponseT => {
  const dispatch = useNotificationContext()

  return (props: NotificationPropsT): void => {
    if (dispatch) {
      dispatch({
        type: ActionTypes.AddNotification,
        payload: {
          id: v4(),
          ...props
        }
      })
    }
  }
}
