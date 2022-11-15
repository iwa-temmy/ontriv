import {
  GET_ALL_SUBSCRIPTIONS,
  GET_ALL_SUBSCRIPTIONS_SUCCESS,
  GET_ALL_SUBSCRIPTIONS_ERROR,
  CANCEL_SUBSCRIPTION,
  CANCEL_SUBSCRIPTION_SUCCESS,
  CANCEL_SUBSCRIPTION_ERROR,
  INITIATE_SUBSCRIPTION,
  INITIATE_SUBSCRIPTION_SUCCESS,
  INITIATE_SUBSCRIPTION_ERROR,
  CHANGE_SUBSCRIPTION_PLAN,
  CHANGE_SUBSCRIPTION_PLAN_SUCCESS,
  CHANGE_SUBSCRIPTION_PLAN_ERROR,
  GET_ALL_CARDS,
  GET_ALL_CARDS_SUCCESS,
  GET_ALL_CARDS_ERROR,
} from "../actions";

export const getAllSubscriptions = () => ({
  type: GET_ALL_SUBSCRIPTIONS,
});

export const getAllSubscriptionsSuccess = (subscriptions) => ({
  type: GET_ALL_SUBSCRIPTIONS_SUCCESS,
  payload: subscriptions,
});
export const getAllSubscriptionsError = (error) => ({
  type: GET_ALL_SUBSCRIPTIONS_ERROR,
  payload: { error },
});

export const cancelSubscription = (credentials) => ({
  type: CANCEL_SUBSCRIPTION,
  payload: { credentials },
});

export const cancelSubscriptionSuccess = () => ({
  type: CANCEL_SUBSCRIPTION_SUCCESS,
  payload: "Subscription Cancelled Successfully",
});

export const cancelSubscriptionError = (error) => ({
  type: CANCEL_SUBSCRIPTION_ERROR,
  payload: { error },
});

export const initiateSubscription = (credentials) => ({
  type: INITIATE_SUBSCRIPTION,
  payload: credentials,
});

export const initiateSubscriptionSuccess = () => ({
  type: INITIATE_SUBSCRIPTION_SUCCESS,
  payload: "Subscription initiated Successfully",
});

export const initiateSubscriptionError = (error) => ({
  type: INITIATE_SUBSCRIPTION_ERROR,
  payload: { error },
});

export const changeSubscriptionPlan = (credentials) => ({
  type: CHANGE_SUBSCRIPTION_PLAN,
  payload: { credentials },
});

export const changeSubscriptionPlanSucess = () => ({
  type: CHANGE_SUBSCRIPTION_PLAN_SUCCESS,
  payload: "Plan Changed Successfully",
});

export const chnageSubscriptionPlanError = (error) => ({
  type: CHANGE_SUBSCRIPTION_PLAN_ERROR,
  payload: { error },
});
export const getAllCards = () => ({
  type: GET_ALL_CARDS,
});

export const getAllCardsSuccess = (cards) => ({
  type: GET_ALL_CARDS_SUCCESS,
  payload: cards,
});

export const getAllCardsError = (error) => ({
  type: GET_ALL_CARDS_ERROR,
  payload: error,
});
