import {ActionTypes} from "../action.enum"

export type UserAction = {
    type: ActionTypes
    user: any
}


const initialState: any = {
    loggedIn: false
}

const userReducer = (state: any = initialState, action: UserAction): any => {
    switch (action.type) {
        case ActionTypes.USER_LOG_IN:
            const loggedIn = true
            
            return {state, ...action.user, loggedIn: loggedIn}
        case ActionTypes.USER_LOG_OUT:

            return {loggedIn: false}
        default:
            return state;
    }
}

export default userReducer