import { SET_ONG_FIELDS } from "./ActionTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_ONG_FIELDS:
      return { ...state, [action.name]: action.value };
    default:
      return state;
  }
};

export default reducer;
