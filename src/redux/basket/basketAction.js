import {
  
  ADD_TO_BASKET,
  RESET_BASKET,
  ADD_TO_BASKET_ITEM,
  REMOVE_ROW

} from "./basketlistType";

export const addToBasket = (product, amount) => {
  return {
    type: ADD_TO_BASKET,
    payload: product,
    bought: amount
  };
};

export const addToBasketItem = (product, SKU) => {
  return {
    type: ADD_TO_BASKET_ITEM,
    payload: product,
    id: SKU
  };
};

export const removeRow = product => {
  return {
    type: REMOVE_ROW,
    payload: product
  };
};

export const resetBasket = () => {
  return {
    type: RESET_BASKET
  };
};
