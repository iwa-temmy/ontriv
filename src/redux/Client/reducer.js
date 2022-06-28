import {
  CREATE_CLIENT,
  CREATE_CLIENT_SUCCESS,
  CREATE_CLIENT_ERROR,
  INVITE_CLIENT,
  INVITE_CLIENT_SUCCESS,
  INVITE_CLIENT_ERROR,
  CREATE_TAG,
  CREATE_TAG_SUCCESS,
  CREATE_TAG_ERROR,
  GET_TAG,
  GET_TAG_SUCCESS,
  GET_TAG_ERROR
} from '../actions'

const INIT_STATE = {
  loading: false,
  createTagLoading: false,
  creationError: '',
  creatingTagError: '',
  message: '',
  tags: [],
  getTagError: ''
}

const ClientReducer = (state = INIT_STATE, action) => {
  console.log(action.payload)
  switch (action.type) {
    case CREATE_CLIENT:
      return {
        ...state,
        loading: true,
        creationError: ''
      }
    case CREATE_CLIENT_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload?.message,
        creationError: ''
      }
    case CREATE_CLIENT_ERROR:
      return {
        ...state,
        loading: false,
        currentUser: null,
        creationError: action.payload.message
          ? action.payload.message
          : action.payload.error
      }
    case INVITE_CLIENT:
      return {
        ...state,
        loading: true,
        creationError: ''
      }
    case INVITE_CLIENT_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload?.message,
        creationError: ''
      }
    case INVITE_CLIENT_ERROR:
      return {
        ...state,
        loading: false,
        currentUser: null,
        creationError: action.payload.message
          ? action.payload.message
          : action.payload.error
      }
    case CREATE_TAG:
      return {
        ...state,
        createTagLoading: true,
        creatingTagError: ''
      }
    case CREATE_TAG_SUCCESS:
      return {
        ...state,
        createTagLoading: false,
        message: action.payload?.message,
        creatingTagError: ''
      }
    case CREATE_TAG_ERROR:
      return {
        ...state,
        creatingTagLoading: false,
        creatingTagError: action.payload.message
          ? action.payload.message
          : action.payload.error
      }
    case GET_TAG:
      return {
        ...state,
        loading: true,
        getTagError: ''
      }
    case GET_TAG_SUCCESS:
      return {
        ...state,
        loading: false,
        tags: action.payload?.tags,
        getTagError: ''
      }
    case GET_TAG_ERROR:
      return {
        ...state,
        loading: false,
        getTagError: action.payload.message
          ? action.payload.message
          : action.payload.error
      }
    default:
      return { ...state }
  }
}
export default ClientReducer
