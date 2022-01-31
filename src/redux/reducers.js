import { combineReducers } from 'redux';
import auth from './Auth/reducer';
import nav from './Nav/reducer'


const Reducers = combineReducers({
    auth,
    nav
});

export default Reducers;