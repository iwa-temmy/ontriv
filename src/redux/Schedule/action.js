import { GET_ALLCLIENT, GET_ALLCLIENT_SUCCESS, GET_ALLCLIENT_ERROR } from "../actions";

export const getAllClient = () => ({
    type: GET_ALLCLIENT,
  });

  export const getAllClientSuccess = (clients) => ({
    type: GET_ALLCLIENT_SUCCESS,
    payload: clients
  });

  export const getAllClientError = (error) => ({
    type: GET_ALLCLIENT_ERROR,
    payload: error
  });