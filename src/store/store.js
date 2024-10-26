import {createStore} from 'redux';
import textReducer from '../reducers/textReducer';

export const store = createStore(textReducer);