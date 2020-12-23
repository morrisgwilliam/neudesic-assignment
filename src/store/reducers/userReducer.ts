import {actionTypes} from "../actions"

export interface IUserState {
    userID: string,
    loggedIn: boolean,
    loading: boolean,
    error: Error | undefined
}

const initialState: any = {
    userID: "my user id",
    loading: false,
    error: undefined,
    loggedIn: true
}

const userReducer = (state: any = initialState, action: actionTypes.UserAction): any => {
    switch (action.type) {
        case actionTypes.ActionsEnum.USER_LOG_IN:
            const loggedIn = true
            
            return {state, ...action.user, loggedIn: loggedIn}
        case actionTypes.ActionsEnum.USER_LOG_OUT:

            return {loggedIn: false}
        default:
            return state;
    }
}

export default userReducer