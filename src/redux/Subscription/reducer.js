import {
  GET_ALL_SUBSCRIPTIONS,
  GET_ALL_SUBSCRIPTIONS_SUCCESS,
  GET_ALL_SUBSCRIPTIONS_ERROR,
  INITIATE_SUBSCRIPTION,
  INITIATE_SUBSCRIPTION_SUCCESS,
  INITIATE_SUBSCRIPTION_ERROR,
  GET_ALL_CARDS,
  GET_ALL_CARDS_SUCCESS,
  GET_ALL_CARDS_ERROR,
  //   CHANGE_SUBSCRIPTION_PLAN,
  //   CHANGE_SUBSCRIPTION_PLAN_SUCCESS,
  //   CHANGE_SUBSCRIPTION_PLAN_ERROR,
  //   CANCEL_SUBSCRIPTION,
  //   CANCEL_SUBSCRIPTION_SUCCESS,
  //   CANCEL_SUBSCRIPTION_ERROR,
  RESET_MESSAGE,
} from "../actions";

const initialState = {
  loading: {
    getAllSubscriptions: false,
    cancelSubscription: false,
    changeSubscriptionPlan: false,
    initiateSubscription: false,
    getAllCards: false,
  },
  error: {
    getAllSubscriptions: "",
    cancelSubscription: "",
    changeSubscriptionPlan: "",
    initiateSubscription: "",
    getAllCards: "",
  },
  message: {
    getAllSubscriptions: "",
    cancelSubscription: "",
    changeSubscriptionPlan: "",
    initiateSubscription: "",
    getAllCards: "",
  },
  subscriptions: [],
  cards: [],
};

const subscriptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SUBSCRIPTIONS:
      return {
        ...state,
        loading: { ...state?.loading, getAllSubscriptions: true },
      };
    case GET_ALL_SUBSCRIPTIONS_SUCCESS:
      return {
        ...state,
        loading: { ...state?.loading, getAllSubscriptions: false },
        subscriptions: action.payload,
      };
    case GET_ALL_SUBSCRIPTIONS_ERROR:
      return {
        ...state,
        loading: { ...state?.loading, getAllSubscriptions: false },
        error: { ...state?.error, getAllSubscriptions: action.payload.error },
      };
    case GET_ALL_CARDS:
      return {
        ...state,
        loading: { ...state?.loading, getAllCards: true },
      };
    case GET_ALL_CARDS_SUCCESS:
      return {
        ...state,
        loading: { ...state?.loading, getAllCards: false },
        cards: action?.payload,
      };
    case GET_ALL_CARDS_ERROR:
      return {
        ...state,
        loading: { ...state?.loading, getAllCards: false },
        error: action.payload,
      };
    case INITIATE_SUBSCRIPTION:
      return {
        ...state,
        loading: { ...state?.loading, initiateSubscription: true },
      };
    case INITIATE_SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        loading: { ...state?.loading, initiateSubscription: false },
      };
    case INITIATE_SUBSCRIPTION_ERROR:
      return {
        ...state,
        loading: { ...state?.loading, initiateSubscription: false },
      };
    case RESET_MESSAGE:
      return {
        ...state,
        error: {
          getAllSubscriptions: "",
          cancelSubscription: "",
          changeSubscriptionPlan: "",
          initiateSubscription: "",
          getAllCards: "",
        },
        message: {
          getAllSubscriptions: "",
          cancelSubscription: "",
          changeSubscriptionPlan: "",
          initiateSubscription: "",
          getAllCards: "",
        },
      };
    default:
      return state;
  }
};

export default subscriptionReducer;
