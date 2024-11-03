import { bookingReducer } from "../reducer/BookingReducer";
import { saveToken, saveSlots } from "../store/BookingAction";
import createDataContext from "./createDataContext";
import {
  signup,
  signin,
  getServices,
  getTimeScheduler,
  getCurrentTimeSlotBalance,
  getQRCode,
  createAppointment
} from "../api/bookingapi";

const addToken = dispatch => {
  return async obj => {
    const result = await signin(obj);
    dispatch(
      saveToken({ id: result.id, token: result.token, email: obj.email })
    );
  };
};

const listServices = dispatch => {
  return async token => {
    const result = await getServices(token);
    return result;
  };
};

const getAllottedTimeInfo = dispatch => {
  return async token => {
    const items = await getTimeScheduler(token);
    return items.results;
  };
};

const getCurrrentTimeSlotBalanceInfo = dispatch => {
  return async (apptDate, scheduleId, token) => {
    const result = await getCurrentTimeSlotBalance(apptDate, scheduleId, token);
    return result;
  };
};

const signupInfo = dispatch => {
  return async ({ firstname, lastname, email, password, phone }) => {
    const result = signup(firstname, lastname, email, password, phone);
    return result;
  };
};

const getQRCodeInfo = dispatch => {
  return async (email, token) => {
    const result = getQRCode(email, token);
    return result;
  };
};

const addAppointment = dispatch => {
  return async (clientId, serviceId, datestr, scheduleId, token) => {
    const result = createAppointment(
      clientId,
      serviceId,
      datestr,
      scheduleId,
      token
    );
    return result;
  };
};

export const { Context, Provider } = createDataContext(
  bookingReducer,
  {
    addToken,
    listServices,
    getAllottedTimeInfo,
    getCurrrentTimeSlotBalanceInfo,
    signupInfo,
    getQRCodeInfo,
    addAppointment
  },
  null
);
