// import { GET_ONECLIENTPOST,GET_ONECLIENTPOST_SUCCESS,GET_ONECLIENTPOST_ERROR } from "../../actions"


// const initialState = {
//     getOneClientPostLoading:false,
//     getOneClientPost:[],
//     getOneClientPostError:''
// }

// const oneClientPostReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case GET_ONECLIENTPOST:
//         return {
//             ...state,
//             getOneClientPostLoading: true,
//         } 
//         case GET_ONECLIENTPOST_SUCCESS:  
//         return {
//             ...state,
//             getOneClientPostLoading: false,
//             getOneClientPost:action.payload,
//         } 
//         case GET_ONECLIENTPOST_ERROR:
//             return {
//                 ...state,
//                 getOneClientPostLoading: false,
//                 getOneClientPostError:action.payload
//             }
//         default:
//         return state;
//     }
// }

// export default oneClientPostReducer;