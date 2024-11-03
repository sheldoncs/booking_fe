import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Confirm from "../../../assets/confirm.png";

const ConfirmAppointmentScreen = ({ navigation }) => {
  return (
    <View>
      <View>
        <Text style={styles.headerStyle}>CONFIRMATION</Text>
      </View>
      <View style={styles.containerStyle}>
        <Image source={Confirm} style={styles.imageStyle} />
        <View style={styles.greetingStyle}>
          <Text style={styles.textStyle}>Thank you for your Reservations!</Text>
        </View>
      </View>
      <View style={styles.containerStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  greetingStyle: {
    width: 220,
    margin: "auto"
  },
  headerStyle: {
    color: "#0F5A75",
    fontSize: 30,
    alignSelf: "center",
    marginTop: 20
  },
  imageStyle: {
    width: 300,
    height: 300,
    alignSelf: "center"
  },
  textStyle: {
    fontSize: 20,
    width: 220,
    textAlign: "center"
  },
  containerStyle: {
    marginTop: 150
  }
});

export default ConfirmAppointmentScreen;
