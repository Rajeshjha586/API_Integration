import { ActionsTypes } from "../contents/ActionTypes";

export const setProducts = (products) => {
  return {
    type: ActionsTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionsTypes.SELECTED_PRODUCTS,
    payload: product,
  };
};
