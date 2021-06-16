import {createStore , combineReducers , applyMiddleware} from 'redux';
import logger from "redux-logger";
import {Conversations} from "./Conversations"
import {Notes} from "./Notepad"
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            notes:Notes ,
            conversations : Conversations
        }) ,composeWithDevTools(applyMiddleware(thunk , logger))
    );

    return store ;
}