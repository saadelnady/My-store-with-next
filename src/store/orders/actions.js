import {
  GET_ORDERS,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAILURE,
} from "./actionTypes";

export const getOrders = (payload) => {
  return {
    type: GET_ORDERS,
    payload,
  };
};

export const getOrdersSuccess = (payload) => {
  return {
    type: GET_ORDERS_SUCCESS,
    payload,
  };
};

export const getOrdersFailure = (payload) => {
  return {
    type: GET_ORDERS_FAILURE,
    payload,
  };
};
