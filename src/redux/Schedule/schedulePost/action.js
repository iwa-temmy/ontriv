import { SCHEDULEPOST, SCHEDULEPOST_SUCCESS, SCHEDULEPOST_ERROR } from "../../actions";

export const scheduledPost = (credentials) => ({
    type: SCHEDULEPOST,
    payload: credentials,
  });

export const scheduledPostSuccess = () => ({
    type: SCHEDULEPOST_SUCCESS,
    payload: "Posts Updated Successfully",
  });

export const scheduledPostError = (error) => ({
    type: SCHEDULEPOST_ERROR,
    payload: error,
  });