import {
    SET_CURRENT_SECTION,
    LOG_USER_IN
} from '../actions';

const INIT_STATE = {
    currentSection: "Overview",
    authState: false
};

const NavReducer = (state = INIT_STATE, action) => {
    const { type, payload } = action
    console.log(payload)
    switch (type) {
        case SET_CURRENT_SECTION:
            return { ...state, currentSection: payload.section }
        case LOG_USER_IN:
            return { ...state, authState: payload.authState }
        default:
            return state;
    }
}
export default NavReducer;