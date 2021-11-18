import {
  ADD_TO_CART,
  DECREMENT,
  GET_TOTAL,
  INCREMENT,
  REMOVE_FROM_CART,
} from "../addToCartConstance";
const initialState = {
  cardData: [],
};
export default function addToCart(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cardData: [...state.cardData, action.payload] };


    case REMOVE_FROM_CART:
      return {
        ...state,
        cardData: state.cardData.filter((item) => item.id !== action.payload),
      };
    case INCREMENT:
      const updatedCart = state.cardData.map((curElem) => {
        if (curElem.id === action.payload) {
          return { ...curElem, quantity: curElem.quantity + 1 };
        }
        return curElem;
      });

      return { ...state, cardData: updatedCart };

    case DECREMENT:
      const updatedCartDecrement = state.cardData
        .map((curElem) => {
          if (curElem.id === action.payload) {
            return { ...curElem, quantity: curElem.quantity - 1 };
          }
          return curElem;
        })
        .filter((curElem) => curElem.quantity !== 0);
      return { ...state, cardData: updatedCartDecrement };
    case GET_TOTAL:
      let { totalItem, totalAmount } = state.cardData.reduce(
        (accum, curVal) => {
          let { price, quantity } = curVal;

          let updatedTotalAmount = price * quantity;
          accum.totalAmount += updatedTotalAmount;

          accum.totalItem += quantity;
          return accum;
        },
        {
          totalItem: 0,
          totalAmount: 0,
        }
      );
      return { ...state, totalItem, totalAmount };
    default:
      return state;
  }
}
