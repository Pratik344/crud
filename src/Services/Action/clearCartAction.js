import {CLEAR_CART} from "../addToCartConstance"
export const clearCart = () => {
    // console.warn("action",data)
    return {
      type: CLEAR_CART,
     };
  };