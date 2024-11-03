import booking from "./booking";

export const signin = async obj => {
  const result = await booking.post(
    "/signin",
    {
      email: obj.email,
      password: obj.password
    },
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );

  return result.data;
};

export const getServices = async token => {
  const result = await booking.get("/services", {
    headers: {
      Authorization: "Bearer " + token
    }
  });

  return result.data;
};

export const getTimeScheduler = async token => {
  const result = await booking.get("/timescheduler", {
    headers: {
      Authorization: "Bearer " + token
    }
  });

  return result.data;
};

export const getCurrentTimeSlotBalance = async (dtestr, scheduleId, token) => {
  const result = await booking.post(
    "/slot/balances",
    {
      apptDate: dtestr,
      scheduleId
    },
    {
      headers: {
        Authorization: "Bearer " + token
      }
    }
  );

  return result.data;
};

export const signup = async (firstname, lastname, email, password, phone) => {
  const result = await booking.post("/signup", {
    firstname,
    lastname,
    email,
    phone,
    password
  });

  return result.data;
};

export const createAppointment = async (
  clientId,
  serviceId,
  selectedDate,
  scheduleId,
  token
) => {
  const result = await booking.post(
    "/add/appointment",
    {
      clientId,
      serviceId,
      selectedDate,
      scheduleId
    },
    {
      headers: {
        Authorization: "Bearer " + token
      }
    }
  );

  return result;
};

export const getQRCode = async (email, token) => {
  const result = await booking.post(
    "/qrcode",
    { email },
    {
      headers: {
        Authorization: "Bearer " + token
      }
    }
  );
  return result.data;
};
