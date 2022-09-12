import { GET_ONECLIENTPOST,GET_ONECLIENTPOST_SUCCESS, GET_ONECLIENTPOST_ERROR } from "../../actions"


export const getOneClientPost = (id) => ({
    type: GET_ONECLIENTPOST,
    payload: { id },
  });
  
  export const getOneClientPostSuccess = (clientPost) => ({
    type: GET_ONECLIENTPOST_SUCCESS,
    payload: clientPost,
  });
  
  export const getOneClientPostError = (error) => ({
    type: GET_ONECLIENTPOST_ERROR,
    payload: error,
  });