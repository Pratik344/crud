import { ADD_TO_CART } from "../addToCartConstance";
const initialState = {
  cardData: [],
};
export default function addToCart(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      // console.warn("reducer",action)
      return [...state, { cardData: action.payload }];
  }
}
