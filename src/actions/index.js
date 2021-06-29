import C from "../constants";

export const changeTheName = () => (dispatch) => {
  dispatch({
    type: C.actionTypes.CHANGE_NAME,
    payload: { name: "Refixed Technologies" },
  });
};
