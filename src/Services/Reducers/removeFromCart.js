import { REMOVE_FROM_CART } from "../addToCartConstance";
// import { useSelector } from "react-redux";
const initialState = {
  afterRemoveCardData: [],
};
export default function removeFromCart(state = initialState, action) {
  // const cart = useSelector((cart) => cart.addToCart);
  // console.log('cart: ', cart);

  switch (action.type) {
    case REMOVE_FROM_CART:
      console.log("action: ", action.cart);
      return {
        ...state,
        afterRemoveCardData: action.cart.filter((item) => 
        item.cardData.id === action.payload.id
        ),
    };

    default:
      return state;
  }
}
