import {actionTypes} from "../actions"



const initialState: any = {
    loggedIn: false
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