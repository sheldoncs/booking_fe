import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import { Context } from "../../context/BookingContext";

import Feather from "@expo/vector-icons/Feather";
import BookingIcon from "../../images/booking.jpg";

const LoginScreen = ({ navigation }) => {
  const { state, addToken } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);

  useEffect(
    () => {
      if (state && state.token) {
        navigation.navigate("AppointmentManager");
      }
    },
    [state]
  );

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>
        {"SIGN-IN"}
      </Text>
      <View>
        <Image style={styles.imageStyle} source={BookingIcon} />
      </View>
      <View>
        <Text style={styles.labelStyle}>
          {"User"}
        </Text>
        <View style={styles.textInputStyle}>
          <TextInput
            value={email}
            style={{ width: 300 }}
            onChangeText={text => setEmail(text)}
            autoCorrect={false}
          />
        </View>
      </View>
      <View>
        <Text style={styles.labelStyle}>
          {"Password"}
        </Text>
        <View style={styles.textInputStyle}>
          <TextInput
            style={{ width: 300 }}
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry={isPasswordSecure}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Feather
            name={isPasswordSecure ? "eye-off" : "eye"}
            size={24}
            color="black"
            onPress={() => setIsPasswordSecure(!isPasswordSecure)}
          />
        </View>
      </View>
      <View>
        <Text
          onPress={() => navigation.navigate("Register")}
          style={styles.textStyleContainer}
        >
          {"REGISTER"}
        </Text>
        <Text
          onPress={() => navigation.navigate("ForgotPassword")}
          style={styles.textStyleContainer}
        >
          {"FORGOT PASSWORD?"}
        </Text>
      </View>
      <View style={styles.buttonStyle}>
        <TouchableOpacity
          style={{
            borderRadius: 15,
            backgroundColor: "#0F5A75",
            height: 50,
            marginTop: 40
          }}
          onPress={() => addToken({ email, password })}
        >
          <Text
            style={{
              color: "#fff",
              alignSelf: "center",
              paddingTop: 7,
              fontSize: 20,
              textTransform: "capitalize"
            }}
          >
            {"SIGN-IN"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    alignSelf: "center",
    fontSize: 22,
    marginBottom: 20
  },
  textInputStyle: {
    borderColor: "#000",
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    height: 45,
    borderRadius: 7,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20
  },
  textPasswordStyle: {},
  labelStyle: {
    marginLeft: 20,
    fontSize: 20
  },
  textStyleContainer: {
    alignSelf: "flex-end",
    marginRight: 20,
    marginBottom: 10,
    color: "#2A91D1",
    fontWeight: "normal",
    fontSize: 15
  },
  buttonStyle: {
    marginLeft: 20,
    marginRight: 20,
    height: 40,
    borderRadius: 15
  },
  imageStyle: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 80
  },
  containerStyle: {
    backgroundColor: "#fff",
    height: "100%"
  }
});

export default LoginScreen;
