import { REMOVE_FROM_CART } from "../addToCartConstance";

export const removeFromCart = (id) => {
  console.log('id: ', id);
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};
