export enum NotificationType {
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
  Danger = 'danger'
}

export interface INotification {
  id: string
  title?: string
  message?: string
  type?: NotificationType
}

export enum ActionTypes {
  AddNotification = 'ADD_NOTIFICATION',
  RemoveNotification = 'REMOVE_NOTIFICATION'
}

export interface IActionType {
  type: ActionTypes
  payload: INotification
}
