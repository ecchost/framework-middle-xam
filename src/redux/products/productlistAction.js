import { ADD_PRODUCT, DECREASE_PRODUCT_STOCK, RESET_PRODUCTS } from "./productlistType";

export const addProduct = product => {
  return {
    type: ADD_PRODUCT,
    payload: product
  };
};

export const decreaseProductStock = decreasedList => { 
  return {
    type: DECREASE_PRODUCT_STOCK, 
    payload: decreasedList
  };
};

export const resetProducts = () => {
  return {
    type: RESET_PRODUCTS
  };
};
