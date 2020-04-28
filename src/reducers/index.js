import { combineReducers } from 'redux';
import auth from './auth'

// 다른 reducer을 불러와서 combine 가능

export default combineReducers({ auth });
