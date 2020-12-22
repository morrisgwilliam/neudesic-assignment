import { ActionsEnum, ContactAction } from '../actions/actions.types'
import {Contact} from '../../entities' 



export interface IContactState {
    current: Contact
}

const initialState : IContactState = {
    current: new Contact()
}

export const contactReducer = (state: IContactState = initialState, action: ContactAction) : IContactState => {
    const newState : IContactState = {...state}
    switch (action.type) {
        case ActionsEnum.CONTACT_GET:
            newState.current.ID = "some id"
            newState.current.Name = "William Morris"
            break;
    
        default:
            break;
    }
    return newState
}

export default contactReducer