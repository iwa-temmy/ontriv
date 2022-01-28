import { combineReducers } from 'redux';
import auth from './Auth/reducer';


const Reducers = combineReducers({
    auth
});

export default Reducers;