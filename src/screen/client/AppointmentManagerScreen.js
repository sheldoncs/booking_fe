import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import BookingIcon from "../../images/booking.jpg";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const AppointmentManagerScreen = ({ navigation }) => {
  return (
    <View style={styles.viewContainerStyle}>
      <Text style={styles.headerStyle}>Appointment Manager</Text>
      <Image style={styles.imageStyle} source={BookingIcon} />
      <View style={styles.socialIconsStyle}>
        <TouchableOpacity>
          <Feather name="phone" size={35} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="chat" size={35} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Services")}
          style={styles.touchOpacityStyle}
        >
          <Text style={styles.btnTextStyle}>
            {"BOOK APPOINTMENT"}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.operationStyle}>
        <View>
          <TouchableOpacity>
            <View style={styles.alignStyle}>
              <MaterialIcons name="cancel" size={55} color="#0F5A75" />
            </View>
            <View style={styles.alignStyle}>
              <Text style={{ fontSize: 20 }}>Cancel</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity>
            <View style={styles.alignStyle}>
              <Feather name="check" size={55} color="#0F5A75" />
            </View>
            <View
              style={styles.alignStyle}
              onPress={() => navigation.navigate("QRCode")}
            >
              <Text style={{ fontSize: 20 }}>Check-In</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.operationStyle}>
        <View>
          <TouchableOpacity>
            <View style={styles.alignStyle}>
              <MaterialIcons name="change-circle" size={55} color="#0F5A75" />
            </View>
            <View style={styles.alignStyle}>
              <Text style={{ fontSize: 20 }}>Change</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity>
            <View style={styles.alignStyle}>
              <MaterialIcons
                name="miscellaneous-services"
                size={55}
                color="#0F5A75"
              />
            </View>
            <View style={styles.alignStyle}>
              <Text style={{ fontSize: 20 }}>Booking</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  changeStyle: {},

  operationStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 90,
    marginRight: 90,
    marginTop: 40
  },
  alignStyle: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    fontSize: 20
  },
  viewContainerStyle: {
    backgroundColor: "#fff",
    height: "100%"
  },
  headerStyle: {
    fontSize: 22,
    alignSelf: "center",
    textTransform: "uppercase",
    marginTop: 15
  },
  imageStyle: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 80
  },
  socialIconsStyle: {
    justifyContent: "space-between",
    marginLeft: 40,
    marginRight: 40,
    display: "flex",
    flexDirection: "row"
  },
  touchOpacityStyle: {
    borderRadius: 30,
    backgroundColor: "#0F5A75",
    height: 50,
    marginTop: 60,
    marginLeft: 40,
    marginRight: 40
  },
  btnTextStyle: {
    color: "#fff",
    alignSelf: "center",
    paddingTop: 12,
    fontSize: 20,
    textTransform: "uppercase"
  }
});

export default AppointmentManagerScreen;
