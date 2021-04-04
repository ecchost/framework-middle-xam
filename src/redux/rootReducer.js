import { combineReducers } from "redux"; 
import productlistReducer from "./products/productlistReducer";
import basketlistReducer from "./basket/basketReducer"

const rootReducer = combineReducers({
  productList: productlistReducer,
  basket: basketlistReducer
});

export default rootReducer;
