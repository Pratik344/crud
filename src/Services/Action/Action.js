import { ADD_TO_USERNAME } from "../Constance";
export const addToUserName = (data) => {
  console.warn("action", data);
  return {
    type: ADD_TO_USERNAME,
    payload: data,
  };
};