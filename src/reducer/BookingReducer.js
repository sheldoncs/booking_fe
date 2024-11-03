import * as actionTypes from "../store/actionTypes";

export const bookingReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SAVETOKEN:
      return {
        ...state,
        token: action.payload.token,
        clientId: action.payload.id,
        email: action.payload.email
      };
    case actionTypes.SLOTS:
      return {
        slots: action.payload,
        ...state
      };
    default:
      return state;
  }
};
