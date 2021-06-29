import C from "../constants";

export default (state = { name: "Refixed" }, action) => {
  switch (action.type) {
    case C.actionTypes.CHANGE_NAME:
      return {
        ...state,
        name: action.payload.name,
      };
    default:
      return state;
  }
};
