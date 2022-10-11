import { SCHEDULEPOST, SCHEDULEPOST_SUCCESS, SCHEDULEPOST_ERROR, GET_ONECLIENTPOST, GET_ONECLIENTPOST_SUCCESS, GET_ONECLIENTPOST_ERROR } from "../../actions";

export const scheduledPost = (credentials) => ({
    type: SCHEDULEPOST,
    payload: credentials,
  });

export const scheduledPostSuccess = (data) => ({
    type: SCHEDULEPOST_SUCCESS,
    payload: data,
  });

export const scheduledPostError = (error) => ({
    type: SCHEDULEPOST_ERROR,
    payload: error,
  });

  //ONECLIENTPOST

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