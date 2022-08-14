import {
  GET_ALL_VENDORS,
  GET_ALL_VENDORS_ERROR,
  GET_ALL_VENDORS_SUCCESS,
  CREATE_NEW_VENDOR,
  CREATE_NEW_VENDOR_SUCCESS,
  CREATE_NEW_VENDOR_ERROR,
} from "../../actions";
export const getAllVendors = () => ({
  type: GET_ALL_VENDORS,
});

export const getAllVendorsSuccess = (vendors) => ({
  type: GET_ALL_VENDORS_SUCCESS,
  payload: vendors,
});

export const getAllVendorsError = (error) => ({
  type: GET_ALL_VENDORS_ERROR,
  payload: error,
});

export const createNewVendor = (payload) => ({
    type: CREATE_NEW_VENDOR,
    payload: payload
})
export const createNewVendorSuccess = () => ({
    type: CREATE_NEW_VENDOR_SUCCESS,
    payload: "Vendor Added Successfully"
})
export const createNewVendorError = (error) => ({
    type: CREATE_NEW_VENDOR_ERROR,
    payload: error
})