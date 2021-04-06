// @ts-nocheck
import { combineReducers } from 'redux';
import authReducer from './auth';




const applicationReducer = combineReducers({

  authReducer,

});

export default applicationReducer;
