import { ActionsEnum } from "./actions.types"

export const logIn = (user: any)  => {
    const action = {
      type: ActionsEnum.USER_LOG_IN,
      user,
    }
  
    return action

}

export const logOut = () =>  {
  const action = {
    type: ActionsEnum.USER_LOG_OUT
  }
  return action
}

export const getContact = (id: string) => {
  const action = {
    type: ActionsEnum.CONTACT_GET,
    payload: {id}
  }
  return action
}