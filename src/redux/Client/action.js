import {
  CREATE_CLIENT,
  CREATE_CLIENT_SUCCESS,
  CREATE_CLIENT_ERROR,
  GET_CLIENT,
  GET_CLIENT_SUCCESS,
  GET_CLIENT_ERROR,
  GET_CLIENT_DETAILS,
  GET_CLIENT_DETAILS_SUCCESS,
  GET_CLIENT_DETAILS_ERROR,
  INVITE_CLIENT,
  INVITE_CLIENT_SUCCESS,
  INVITE_CLIENT_ERROR,
  GET_TAG,
  GET_TAG_SUCCESS,
  GET_TAG_ERROR,
  CREATE_TAG,
  CREATE_TAG_SUCCESS,
  CREATE_TAG_ERROR
} from '../actions'

export const createClient = clientDetails => ({
  type: CREATE_CLIENT,
  payload: { clientDetails }
})
export const createClientSuccess = message => ({
  type: CREATE_CLIENT_SUCCESS,
  payload: { message }
})
export const createClientError = error => ({
  type: CREATE_CLIENT_ERROR,
  payload: { error }
})

export const getClient = () => ({
  type: GET_CLIENT
})
export const getClientSuccess = data => ({
  type: GET_CLIENT_SUCCESS,
  payload: { data }
})
export const getClientError = error => ({
  type: GET_CLIENT_ERROR,
  payload: { error }
})
export const getClientDetails = ( id ) => ({
  type: GET_CLIENT_DETAILS,
  payload: { id }
})
export const getClientDetailsSuccess = data => ({
  type: GET_CLIENT_DETAILS_SUCCESS,
  payload: { data }
})
export const getClientDetailsError = error => ({
  type: GET_CLIENT_DETAILS_ERROR,
  payload: { error }
})

export const inviteClient = clientDetails => ({
  type: INVITE_CLIENT,
  payload: { clientDetails }
})
export const inviteClientSuccess = message => ({
  type: INVITE_CLIENT_SUCCESS,
  payload: { message }
})
export const inviteClientError = error => ({
  type: INVITE_CLIENT_ERROR,
  payload: { error }
})

export const createTag = tag => ({
  type: CREATE_TAG,
  payload: { tag }
})
export const createTagSuccess = message => ({
  type: CREATE_TAG_SUCCESS,
  payload: { message }
})
export const createTagError = error => ({
  type: CREATE_TAG_ERROR,
  payload: { error }
})

export const getTag = () => ({
  type: GET_TAG
})
export const getTagSuccess = tags => ({
  type: GET_TAG_SUCCESS,
  payload: { tags }
})
export const getTagError = error => ({
  type: GET_TAG_ERROR,
  payload: { error }
})
