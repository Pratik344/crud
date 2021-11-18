import { INCREMENT } from "../addToCartConstance";
export const increment = (id) => {
    return ({
      type: "INCREMENT",
      payload: id,
    });
  };