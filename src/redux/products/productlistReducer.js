import {
  ADD_PRODUCT,
  DECREASE_PRODUCT_STOCK,
  RESET_PRODUCTS
} from "./productlistType";

const initProduct = {
  numberOfProducts: 0,
  productArray: []
};

const productlistReducer = (state = initProduct, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        numberOfProducts: state.numberOfProducts + 1,
        productArray: [...state.productArray, action.payload]
      };
    case DECREASE_PRODUCT_STOCK:
      return {
        ...state,
        productArray: state.productArray.map(item =>
          item.SKU === action.id ? action.payload.stock - 1 : item
        )
      };
    case RESET_PRODUCTS:
      return {
        ...state,
        productArray: initProduct.productArray
      };
    default:
      return state;
  }
};

export default productlistReducer;
