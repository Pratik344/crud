import { ADD_TO_USERNAME } from "../Constance";
const initialState = {
  profileData: [],
};

export default function profileName(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_USERNAME:
      // console.warn("reducer",action)
      return {...state,  profileData: action.payload }
      default:
      return state;
  }
}
