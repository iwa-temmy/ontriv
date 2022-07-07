import { combineReducers } from 'redux';
import auth from './Auth/reducer';
import nav from './Nav/reducer';
import client from './Client/reducer'
import settings from "./Settings/reducer";
import general from "./General/reducer"


const Reducers = combineReducers({
    auth,
    nav,
    client,
    settings,
    general
});

export default Reducers;