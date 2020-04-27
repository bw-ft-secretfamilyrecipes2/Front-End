import {combineReducers} from 'redux';

import {loginReducer} from './loginReducer.js';
import { registerReducer } from './registerReducer.js'

export default combineReducers({
    loginReducer,
    registerReducer,
})