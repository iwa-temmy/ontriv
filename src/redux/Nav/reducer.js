import {
    SET_CURRENT_SECTION
} from '../actions';

const INIT_STATE = {
    currentSection: "Overview"
};

const NavReducer = (state = INIT_STATE, action) => {
    const { type, payload } = action
    // console.log(payload)
    switch (type) {
        case SET_CURRENT_SECTION:
            return { ...state, currentSection: payload.section }
        default:
            return state;
    }
}
export default NavReducer;