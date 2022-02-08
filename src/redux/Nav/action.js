import {
  SET_CURRENT_SECTION,
  LOG_USER_IN
} from '../actions';

export const setCurrentSection = (section) => ({
  type: SET_CURRENT_SECTION,
  payload: { section },
});

export const setAuthState = (authState) => ({
  type: LOG_USER_IN,
  payload: { authState },
});