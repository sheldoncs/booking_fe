import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  Button
} from "react-native";
import { RadioButton } from "react-native-paper";
import Feather from "@expo/vector-icons/Feather";
import DateTimePicker from "@react-native-community/datetimepicker";
import AntDesign from "@expo/vector-icons/AntDesign";
import CardTypes from "../../assets/cardtypes.png";
import SecurityCode from "../../assets/seccode.png";
import * as moment from "moment";

const Input = ({
  type,
  value,
  placeholder,
  isPasswordSecure,
  callBack,
  label,
  elementName,
  setIsPasswordSecure,
  selectedValue,
  setSelectedValue,
  width
}) => {
  const [date, setDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState("");
  const [show, setShow] = useState(false);
  const mode = "date";

  let elementInput = null;

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    const dateObj = new Date(currentDate.toString());

    // Get components of the date
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const day = String(dateObj.getDate()).padStart(2, "0");

    // Format the date as yyyy-MM-dd
    callBack(`${year}-${month}-${day}`);
  };

  switch (type) {
    case "text":
      elementInput = (
        <View style={!width ? styles.viewStyle : styles.viewWithWidthStyle}>
          <TextInput
            placeholderTextColor="#B2AFAF"
            value={value}
            placeholder={placeholder}
            isPasswordSecure={isPasswordSecure}
            onChangeText={text => callBack(text)}
            autoCorrect={false}
          />
          {width &&
            elementName === "cardNo" &&
            <View style={{ marginTop: 7, marginRight: 10 }}>
              <Image source={CardTypes} />
            </View>}
          {width &&
            elementName === "secCode" &&
            <View style={{ alignSelf: "center", marginRight: 15 }}>
              <Image source={SecurityCode} style={{ height: 20 }} />
            </View>}
        </View>
      );
      break;
    case "generaltext":
      elementInput = (
        <View style={styles.generalViewStyle}>
          <TextInput
            placeholderTextColor="#B2AFAF"
            value={value}
            placeholder={placeholder}
            isPasswordSecure={isPasswordSecure}
            onChangeText={text => callBack(text)}
            autoCorrect={false}
          />
        </View>
      );
      break;
    case "radio":
      elementInput = (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            borderColor: "#7D7C7C",
            borderWidth: 1,
            borderRadius: 5,
            paddingLeft: 5,
            width: 185,
            height: 45,
            margin: 3
          }}
        >
          <RadioButton
            onPress={() => setSelectedValue(value)}
            value={value}
            status={selectedValue === value ? "checked" : "unchecked"}
          />
          <Text>
            {label}
          </Text>
        </View>
      );
      break;
    case "date":
      elementInput = (
        <View style={styles.viewWithWidthStyle}>
          <View style={{ width: 100, alignSelf: "center" }}>
            <TextInput
              editable={false}
              placeholderTextColor="#B2AFAF"
              value={value}
              mode={mode}
              placeholder={placeholder}
              isPasswordSecure={isPasswordSecure}
              onChangeText={text => callBack(text)}
              autoCorrect={false}
            />
          </View>
          <TouchableOpacity onPress={() => setShow(true)} title={"Select Date"}>
            <View style={{ marginRight: 15 }}>
              <AntDesign name="calendar" size={30} color="black" />
            </View>
          </TouchableOpacity>
          {show &&
            <DateTimePicker
              value={date}
              mode="date"
              display="spinner"
              onChange={onChange}
            />}
        </View>
      );
      break;
    case "password":
      elementInput = (
        <View style={styles.passwordStyle}>
          <TextInput
            style={{
              width: 330
            }}
            placeholderTextColor="#B2AFAF"
            value={value}
            placeholder={placeholder}
            secureTextEntry={isPasswordSecure}
            onChangeText={text => callBack(text)}
            autoCorrect={false}
          />
          <Feather
            name={isPasswordSecure ? "eye-off" : "eye"}
            style={{ alignSelf: "center" }}
            size={24}
            color="black"
            onPress={() => setIsPasswordSecure(!isPasswordSecure)}
          />
        </View>
      );
      break;
  }

  return (
    <View>
      {elementInput}
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderColor: "#7D7C7C",
    borderWidth: 1,
    alignContent: "stretch",
    width: 185,
    margin: 3,
    paddingLeft: 10,
    height: 45,
    borderRadius: 5,
    paddingTop: 5
  },
  viewWithWidthStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#7D7C7C",
    backgroundColor: "#fff",
    borderWidth: 1,
    alignContent: "stretch",
    width: 350,
    margin: 3,
    paddingTop: 3,
    paddingLeft: 10,
    height: 45,
    borderRadius: 5
  },
  buttonStyle: {
    marginRight: 15,
    alignSelf: "center"
  },
  generalViewStyle: {
    borderColor: "#7D7C7C",
    borderWidth: 1,
    alignContent: "stretch",
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 10,
    height: 45,
    borderRadius: 5,
    paddingTop: 5
  },
  passwordStyle: {
    display: "flex",
    flexDirection: "row",
    borderColor: "#7D7C7C",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    height: 45,
    width: 375,
    borderRadius: 5
  }
});

export default Input;
