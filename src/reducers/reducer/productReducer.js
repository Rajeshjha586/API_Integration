import { ActionsTypes } from "../contents/ActionTypes";
const intialState = {
  products: [],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionsTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

//destructured action = {type, payload} for easeness
export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionsTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionsTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
