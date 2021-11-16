import { ADD_TO_CART } from "../addToCartConstance";
export const addToCart = (data) => {
  // console.warn("action",data)
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};
