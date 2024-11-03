import * as actionTypes from "./actionTypes";

export const saveToken = (payload) => ({
  type: actionTypes.SAVETOKEN,
  payload: payload
});

export const saveSlots = (payload) => ({
  type: actionTypes.SLOTS,
  payload
});