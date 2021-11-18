import {CHECK_INTO_CART} from "../addToCartConstance"
export const checkIntoCart = (id) => {
    // console.warn("action",data)
    return {
      type: CHECK_INTO_CART,
      payload:id,
     };
  };