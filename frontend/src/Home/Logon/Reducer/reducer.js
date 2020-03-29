import { SET_ID_FIELD } from "./ActionTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_ID_FIELD:
      return { ...state, [action.name]: action.value };
    default:
      return state;
  }
};

export default reducer;
