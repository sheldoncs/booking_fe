import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";

import Feather from "@expo/vector-icons/Feather";
import BookingIcon from "../../images/booking.jpg";
import Input from "../../components/Input";

const ForgotPasswordScreen = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);

  return (
    <View style={styles.containerStyle}>
      <View>
        <Text style={styles.titleStyle}>
          {"FORGOT PASSWORD"}
        </Text>
      </View>
      <View>
        <Image style={styles.imageStyle} source={BookingIcon} />
      </View>
      <View>
        <Input
          type="generaltext"
          value={user}
          label={"Enter email"}
          placeholder={"Enter email"}
          isPasswordSecure={false}
          width=""
          callBack={val => changeHandler(val, elem, item)}
        />
      </View>
      <View>
        <Text style={styles.textStyleContainer}>
          {"GOTO SIGN-IN"}
        </Text>
      </View>
      <View>
        <TouchableOpacity style={styles.touchOpacityStyle}>
          <Text style={styles.btnTextStyle}>
            {"SEND"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: "#fff",
    height: "100%",
    paddingTop: 40
  },
  titleStyle: {
    alignSelf: "center",
    fontSize: 22,
    marginBottom: 20
  },
  textStyleContainer: {
    alignSelf: "flex-end",
    marginRight: 20,
    marginBottom: 10,
    color: "#2A91D1",
    fontWeight: "normal",
    marginTop: 10,
    fontSize: 15
  },
  imageStyle: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20
  },
  touchOpacityStyle: {
    borderRadius: 10,
    backgroundColor: "#0F5A75",
    height: 50,
    marginTop: 60,
    marginLeft: 10,
    marginRight: 10
  },
  btnTextStyle: {
    color: "#fff",
    alignSelf: "center",
    paddingTop: 7,
    fontSize: 20,
    textTransform: "capitalize"
  }
});

export default ForgotPasswordScreen;
