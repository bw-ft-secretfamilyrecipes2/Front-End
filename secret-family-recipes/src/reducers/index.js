import {combineReducers} from 'redux';

import {loginReducer} from './loginReducer.js';
import { registerReducer } from './registerReducer.js'
import { recipesReducer } from './recipesReducer.js'


export default combineReducers({
    loginReducer,
    registerReducer,
    recipesReducer
})