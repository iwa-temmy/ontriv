import {
  RESET_PASSWORD,
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_SUCCESS,
  RESET_MESSAGE,
} from "../actions";

export const resetPassword = (credentials) => ({
  type: RESET_PASSWORD,
  payload: { credentials },
});

export const resetPasswordSuccess = () => ({
  type: RESET_PASSWORD_SUCCESS,
  payload: "Password Updated Successfully",
});
export const resetPasswordError = (error) => ({
  type: RESET_PASSWORD_ERROR,
  payload: { error },
});

export const clearMessages = () => ({
  type: RESET_MESSAGE,
})
