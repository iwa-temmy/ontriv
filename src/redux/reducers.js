import { combineReducers } from 'redux';
import auth from './Auth/reducer';
import nav from './Nav/reducer';
import client from './Client/reducer'


const Reducers = combineReducers({
    auth,
    nav,
    client
});

export default Reducers;