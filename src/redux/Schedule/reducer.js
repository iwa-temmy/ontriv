import { GET_ALLCLIENT, GET_ALLCLIENT_SUCCESS, GET_ALLCLIENT_ERROR } from "../actions";

const initialState = {
    getAllClientLoading:false,
    getAllClientDetails:[],
    getAllClientError:""
}

const scheduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALLCLIENT:
         return {
           ...state,
           getAllClientLoading: true,
         };
        case GET_ALLCLIENT_SUCCESS:
            return {
                ...state,
                getAllClientLoading: false,
                getAllClientDetails: action.payload,
            };
            case GET_ALLCLIENT_ERROR:
                return {
                    ...state,
                    getAllClientLoading:false,
                    getAllClientError:action.payload
                }
                default:
                    return state;
    }
}

export default scheduleReducer