/*NAV*/
export const SET_CURRENT_SECTION = "SET_CURRENT_SECTION";

/* AUTH */
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";

export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";

export const LOGOUT_USER = "LOGOUT_USER";
export const LOG_USER_IN = "LOG_USER_IN";

export const FORGOT_PASSWORD = "FORGOT_PASSWORD";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_ERROR = "FORGOT_PASSWORD_ERROR";

//Reset State
export const RESET_MESSAGE = "RESET_MESSAGE";

/*Client*/
export const CREATE_CLIENT = "CREATE_CLIENT";
export const CREATE_CLIENT_SUCCESS = "CREATE_CLIENT_SUCCESS";
export const CREATE_CLIENT_ERROR = "CREATE_CLIENT_ERROR";

export const GET_CLIENT = "GET_CLIENT";
export const GET_CLIENT_SUCCESS = "GET_CLIENT_SUCCESS";
export const GET_CLIENT_ERROR = "GET_CLIENT_ERROR";

export const GET_CLIENT_DETAILS = "GET_CLIENT_DETAILS";
export const GET_CLIENT_DETAILS_SUCCESS = "GET_CLIENT_DETAILS_SUCCESS";
export const GET_CLIENT_DETAILS_ERROR = "GET_CLIENT_DETAILS_ERROR";

export const INVITE_CLIENT = "INVITE_CLIENT";
export const INVITE_CLIENT_SUCCESS = "INVITE_CLIENT_SUCCESS";
export const INVITE_CLIENT_ERROR = "INVITE_CLIENT_ERROR";
export const CREATE_TAG = "CREATE_TAG";
export const CREATE_TAG_SUCCESS = "CREATE_TAG_SUCCESS";
export const CREATE_TAG_ERROR = "CREATE_TAG_ERROR";
export const GET_TAG = "GET_TAG";
export const GET_TAG_SUCCESS = "GET_TAG_SUCCESS";
export const GET_TAG_ERROR = "GET_TAG_ERROR";

//Setttings (General)
export const RESET_PASSWORD = "RESET_PASSWORD";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_ERROR = "RESET_PASSWORD_ERROR";
export const UPDATE_BUSINESS_DETAILS = "UPDATE_BUSINESS_DETAILS";
export const GET_BUSINESS_DETAILS = "GET_BUSINESS_DETAILS";
export const GET_BUSINESS_DETAILS_SUCCESS = "GET_BUSINESS_DETAILS_SUCCESS";
export const GET_BUSINESS_DETAILS_ERROR = "GET_BUSINESS_DETAILS_ERROR";
export const UPDATE_BUSINESS_DETAILS_SUCCESS =
  "UPDATE_BUSINESS_DETAILS_SUCCESS";
export const UPDATE_BUSINESS_DETAILS_ERROR = "UPDATE_BUSINESS_DETAILS_ERROR";
export const CHANGE_BUSINESS_LOGO = "CHANGE_BUSINESS_LOGO";
export const CHANGE_BUSINESS_LOGO_SUCCESS = "CHANGE_BUSINESS_LOGO_SUCCESS";
export const CHANGE_BUSINESS_LOGO_ERROR = "CHANGE_BUSINESS_LOGO_ERROR";
export const CHANGE_PROFILE_IMAGE = "CHANGE_PROFILE_IMAGE";
export const CHANGE_PROFILE_IMAGE_SUCCESS = "CHANGE_PROFILE_IMAGE_SUCCESS";
export const CHANGE_PROFILE_IMAGE_ERROR = "CHANGE_PROFILE_IMAGE_ERROR";
export const GET_USER_DETAILS = "GET_USER_DETAILS";
export const GET_USER_DETAILS_SUCCESS = "GET_USER_DETAILS_SUCCESS";
export const GET_USER_DETAILS_ERROR = "GET_USER_DETAILS_ERROR";
export const UPDATE_USER_DETAILS = "UPDATE_USER_DETAILS";
export const UPDATE_USER_DETAILS_SUCCESS = "UPDATE_USER_DETAILS_SUCCESS";
export const UPDATE_USER_DETAILS_ERROR = "UPDATE_USER_DETAILS_ERROR";

//Invoices
export const GET_INVOICES = "GET_INVOICES";
export const GET_INVOICES_SUCCESS = "GET_INVOICES_SUCCESS";
export const GET_INVOICES_ERROR = "GET_INVOICES_ERROR";
export const CREATE_NEW_INVOICE = "CREATE_NEW_INVOICE";
export const CREATE_NEW_INVOICE_SUCCESS = "CREATE_NEW_INVOICE_SUCCESS";
export const CREATE_NEW_INVOICE_ERROR = "CREATE_NEW_INVOICE_ERROR";
export const REQUEST_PAYOUT = "REQUEST_PAYOUT";
export const REQUEST_PAYOUT_SUCCESS = "REQUEST_PAYOUT_SUCCESS";
export const REQUEST_PAYOUT_ERROR = "REQUEST_PAYOUT_ERROR";

//One Invoice Action
export const GET_ONE_INVOICE = "GET_ONE_INVOICE";
export const GET_ONE_INVOICE_SUCCESS = "GET_ONE_INVOICE_SUCCESS";
export const GET_ONE_INVOICE_ERROR = "GET_ONE_INVOICE_ERROR";
export const GET_ONE_INVOICE_SETTINGS = "GET_ONE_INVOICE_SETTINGS";
export const GET_ONE_INVOICE_SETTINGS_SUCCESS =
  "GET_ONE_INVOICE_SETTINGS_SUCCESS";
export const GET_ONE_INVOICE_SETTINGS_ERROR = "GET_ONE_INVOICE_SETTINGS_ERROR";
export const UPDATE_ONE_INVOICE_SETTINGS = "UPDATE_ONE_INVOICE_SETTINGS";
export const UPDATE_ONE_INVOICE_SETTINGS_SUCCESS =
  "UPDATE_ONE_INVOICE_SETTINGS_SUCCESS";
export const UPDATE_ONE_INVOICE_SETTINGS_ERROR =
  "UPDATE_ONE_INVOICE_SETTINGS_ERROR";
export const DELETE_ONE_INVOICE = "DELETE_ONE_INVOICE";
export const DELETE_ONE_INVOICE_SUCCESS = "DELETE_ONE_INVOICE_SUCCESS";
export const DELETE_ONE_INVOICE_ERROR = "DELETE_ONE_INVOICE_ERROR";
export const RECORD_ONE_INVOICE_PAYMENT = "RECORD_ONE_INVOICE_PAYMENT";
export const RECORD_ONE_INVOICE_PAYMENT_SUCCESS =
  "RECORD_ONE_INVOICE_PAYMENT_SUCCESS";
export const RECORD_ONE_INVOICE_PAYMENT_ERROR =
  "RECORD_ONE_INVOICE_PAYMENT_ERROR";
export const DUPLICATE_ONE_INVOICE = "DUPLICATE_ONE_INVOICE";
export const DUPLICATE_ONE_INVOICE_SUCCESS = "DUPLICATE_ONE_INVOICE_SUCCESS";
export const DUPLICATE_ONE_INVOICE_ERROR = "DUPLICATE_ONE_INVOICE_ERROR";

//Expenses
export const GET_EXPENSES = "GET_EXPENSES";
export const GET_EXPENSES_SUCCESS = "GET_EXPENSES_SUCCESS";
export const GET_EXPENSES_ERROR = "GET_EXPENSES_ERROR";
export const CREATE_NEW_EXPENSE = "CREATE_NEW_EXPENSE";
export const CREATE_NEW_EXPENSE_SUCCESS = "CREATE_NEW_EXPENSE_SUCCESS";
export const CREATE_NEW_EXPENSE_ERROR = "CREATE_NEW_EXPENSE_ERROR";

//Vendors
export const GET_ALL_VENDORS = "GET_ALL_VENDORS";
export const GET_ALL_VENDORS_SUCCESS = "GET_ALL_VENDORS_SUCCESS";
export const GET_ALL_VENDORS_ERROR = "GET_ALL_VENDORS_ERROR";
export const CREATE_NEW_VENDOR = "CREATE_NEW_VENDOR";
export const CREATE_NEW_VENDOR_SUCCESS = "CREATE_NEW_VENDOR_SUCCESS";
export const CREATE_NEW_VENDOR_ERROR = "CREATE_NEW_VENDOR_ERROR";

export * from "./Auth/action";
export * from "./Nav/action";
export * from "./Client/action";
export * from "./Settings/action";
export * from "./General/action";
export * from "./Invoices/action";
export * from "./Expenses/action";
export * from "./Invoices/OneInvoice/action";
export * from "./Expenses/Vendor/action";
