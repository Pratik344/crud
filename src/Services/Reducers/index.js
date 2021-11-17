import { combineReducers } from "redux";
import profileName from "./profileName";
import addToCart from "./addToCart";
import removeFromCart from "./removeFromCart";
export default combineReducers({
  profileName,
  addToCart,
  removeFromCart,
});
