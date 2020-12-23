import userReducer, {IUserState as IUser} from './userReducer'
import contactsReducer,{IContactsState as IContact} from './contactsReducer'

export type IUserState = IUser
export type IContactsState = IContact
export {userReducer, contactsReducer}