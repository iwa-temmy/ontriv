import { SCHEDULEPOST, SCHEDULEPOST_SUCCESS, SCHEDULEPOST_ERROR, GET_ONECLIENTPOST, GET_ONECLIENTPOST_SUCCESS, GET_ONECLIENTPOST_ERROR } from "../../actions"

const intialState = {
    postScheduleLoading: false,
    postScheduleData: [],
    postScheduleError: '',

    getOneClientPostLoading:false,
    getOneClientPost:[],
    getOneClientPostError:''
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
            case GET_ONECLIENTPOST:
                return {
                    ...state,
                    getOneClientPostLoading: true,
                };
                case GET_ONECLIENTPOST_SUCCESS:  
        return {
            ...state,
            getOneClientPostLoading: false,
            getOneClientPost:action.payload,
        };
        case GET_ONECLIENTPOST_ERROR:
            return {
                ...state,
                getOneClientPostLoading: false,
                getOneClientPostError:action.payload
            }
        default:
            return state;
    }
}

export default postScheduleReducer