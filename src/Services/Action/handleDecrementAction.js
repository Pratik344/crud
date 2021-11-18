import { DECREMENT } from "../addToCartConstance";
export const decrement = (id) => {
  return ({
    type: "DECREMENT",
    payload: id,
  });
};
