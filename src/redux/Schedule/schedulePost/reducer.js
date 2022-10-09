import { SCHEDULEPOST, SCHEDULEPOST_SUCCESS, SCHEDULEPOST_ERROR } from "../../actions"

const intialState = {
    postScheduleLoading: false,
    postScheduleData: [],
    postScheduleError: '',
}

const postScheduleReducer = (state = intialState, action) => {
    switch (action.type) {
        case SCHEDULEPOST:
            return {
                ...state,
                postScheduleLoading: true
            };
        case SCHEDULEPOST_SUCCESS:
            return {
                ...state,
                postScheduleLoading: false,
                postScheduleData: action.payload
            };
        case SCHEDULEPOST_ERROR:
            return {
                ...state,
                postScheduleLoading: false,
                postScheduleError: action.payload
            };
        default:
            return state;
    }
}

export default postScheduleReducer