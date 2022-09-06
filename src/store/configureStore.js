import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import entriesReducer from '../reducers/entries.reducers';

const configureStore = () => createStore(combineReducers({
    entries: entriesReducer,
}), composeWithDevTools());

export default configureStore;
