import {Contact} from '../../entities'
export enum ActionsEnum {
    // USER ACTIONS
    USER_LOG_IN,
    USER_LOG_OUT,

    // CONTACT ACTIONS
    CONTACT_CREATE,
    CONTACT_DELETE,
    CONTACT_GET
}

export type ContactAction = {
    type: ActionsEnum.CONTACT_CREATE | ActionsEnum.CONTACT_DELETE | ActionsEnum.CONTACT_GET
    payload?: Contact | {id: string}
}

export type UserAction = {
    type: ActionsEnum.USER_LOG_IN | ActionsEnum.USER_LOG_OUT
    user?: any
}