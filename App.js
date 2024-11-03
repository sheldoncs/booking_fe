import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "./src/screen/client/LoginScreen";
import RegisterScreen from "./src/screen/client/RegisterScreen";
import ForgotPasswordScreen from "./src/screen/client/ForgotPasswordScreen";
import AppointmentManagerScreen from "./src/screen/client/AppointmentManagerScreen";
import AppointmentScreen from "./src/screen/client/AppointmentScreen";
import ServiceScreen from "./src/screen/client/ServiceScreen";
import SummaryAppointmentScreen from "./src/screen/client/SummaryAppointmentScreen";
import ConfirmAppointmentScreen from "./src/screen/client/ConfirmAppointmentScreen";
import QRCodeScreen from "./src/screen/client/QRCodeScreen";
import PaymentScreen from "./src/screen/client/PaymentScreen";
import { Provider } from "./src/context/BookingContext";

const navigator = createStackNavigator(
  {
    QRCode: QRCodeScreen,
    Login: LoginScreen,
    ForgotPassword: ForgotPasswordScreen,
    Register: RegisterScreen,
    AppointmentManager: AppointmentManagerScreen,
    Appointment: AppointmentScreen,
    Services: ServiceScreen,
    Summary: SummaryAppointmentScreen,
    Payment: PaymentScreen,
    Confirm: ConfirmAppointmentScreen
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "Bookings"
    }
  }
);
const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
