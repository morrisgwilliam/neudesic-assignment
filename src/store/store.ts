import {createStore, combineReducers, applyMiddleware, compose, CombinedState, Reducer} from 'redux';
import {userReducer, contactsReducer, IContactsState, IUserState} from './reducers';
import thunk from "redux-thunk";
import {actionTypes} from './actions'

// add redux dev tools type to window property for typescript.

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
    }
  }
export interface IApplicationState {
    user: IUserState,
    contacts: IContactsState
}

const middleware = [thunk];
const initialState = {}


const rootReducer: Reducer<CombinedState<IApplicationState>, actionTypes.UserAction | actionTypes.ContactAction> = combineReducers(
    {
        user: userReducer,
        contacts: contactsReducer
    }
);

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
);

//export default createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default createStore(rootReducer, initialState, enhancer)