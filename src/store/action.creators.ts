import { ActionTypes } from "./action.enum"

export const logIn = (user: any)  => {
    const action = {
      type: ActionTypes.USER_LOG_IN,
      user,
    }
  
    return action

}

export const logOut = () =>  {
  const action = {
    type: ActionTypes.USER_LOG_OUT
  }
  return action
}
