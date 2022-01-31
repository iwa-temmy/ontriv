import {
    SET_CURRENT_SECTION
  } from '../actions';
  
  export const setCurrentSection = (section) => ({
    type: SET_CURRENT_SECTION,
    payload: { section },
  });