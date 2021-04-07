import { combineReducers } from "redux";

import { productsReducer, selectedProductsReducer } from "./productReducer";

export const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
});
