import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {userReducer,contactReducer} from './reducers';
import thunk from "redux-thunk";
import { IContactState } from './reducers/contactReducer';

// add redux dev tools type to window property for typescript.

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
    }
  }
export interface IApplicationState {
    user: any,
    contact: IContactState
}

const middleware = [thunk];
const initialState = {}

const rootReducer = combineReducers(
    {
        user: userReducer,
        contact: contactReducer
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