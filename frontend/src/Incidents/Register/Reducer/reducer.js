import { SET_NEW_INCIDENT_FIELDS } from "./ActionTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_NEW_INCIDENT_FIELDS:
      return { ...state, [action.name]: action.value };
    default:
      return state;
  }
};

export default reducer;
