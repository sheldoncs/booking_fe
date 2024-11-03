import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image
} from "react-native";
import Input from "../../components/Input";
import { Context } from "../../context/BookingContext";
import Card from "../../../assets/card.png";
import PayPal from "../../../assets/paypal.png";
import BookingIcon from "../../images/booking.jpg";

const PaymentScreen = ({ navigation }) => {
  const [payAmt, setPayAmt] = useState("$0");
  const [inputForm, setInputForm] = useState({
    cardNo: {
      type: "text",
      label: "Card Number",
      elementName: "cardNo",
      value: "",
      width: 350,
      isPasswordSecure: false
    },
    expirationDate: {
      type: "date",
      label: "Expiration Date",
      elementName: "expDate",
      value: "",
      width: 350,
      isPasswordSecure: false
    },
    securityCode: {
      type: "text",
      label: "Security Code",
      elementName: "secCode",
      value: "",
      width: 350,
      isPasswordSecure: false
    }
  });

  useEffect(() => {
    setPayAmt(
      "$" +
        navigation
          .getParam("price")
          .toFixed(2)
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    );
  }, []);

  const formatCardNumber = value => {
    // Remove all non-digit characters
    const onlyNumbers = value.replace(/\D/g, "");

    // Add spaces after every 4 digits
    const formattedNumber = onlyNumbers.replace(/(\d{4})(?=\d)/g, "$1 ");

    return formattedNumber.trim(); // Remove trailing space
  };

  const changeHandler = (text, elem) => {
    if (elem === "expirationDate") {
      setInputForm(prevData => ({
        ...prevData,
        cardNo: { ...prevData.cardNo },
        securityCode: { ...prevData.securityCode },
        expirationDate: { ...prevData.expirationDate, value: text }
      }));
    } else if (elem === "cardNo") {
      setInputForm(prevData => ({
        ...prevData,
        cardNo: { ...prevData.cardNo, value: formatCardNumber(text) },
        securityCode: { ...prevData.securityCode },
        expirationDate: { ...prevData.expirationDate }
      }));
    } else if (elem === "securityCode") {
      setInputForm(prevData => ({
        ...prevData,
        cardNo: { ...prevData.cardNo },
        securityCode: { ...prevData.securityCode, value: text },
        expirationDate: { ...prevData.expirationDate }
      }));
    }
  };

  const setupInputForm = () => {
    return Object.keys(inputForm).map((item, index) => {
      return (
        <View key={index}>
          <Input
            type={inputForm[item].type}
            value={inputForm[item].value}
            label={inputForm[item].label}
            width={inputForm[item].width}
            elementName={inputForm[item].elementName}
            placeholder={inputForm[item].label}
            isPasswordSecure={inputForm[item].isPasswordSecure}
            callBack={text => changeHandler(text, item)}
          />
        </View>
      );
    });
  };

  return (
    <View style={{ backgroundColor: "#fff", height: "100%" }}>
      <Text style={styles.titleStyle}>
        {"PAYMENTS"}
      </Text>
      <View>
        <Image style={styles.imageStyle} source={BookingIcon} />
      </View>
      <View style={styles.paymentTypeContainerStyle}>
        <View style={styles.paymentTypeStyleEnabled}>
          <Image source={Card} style={{ width: 40 }} />
        </View>
        <View style={styles.paymentTypeStyleDisabled}>
          <Image source={PayPal} style={{ width: 40 }} />
        </View>
      </View>
      <View style={styles.viewStyle}>
        {setupInputForm()}
      </View>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            alignSelf: "center",
            marginTop: 7,
            paddingTop: 4
          }}
        >
          Pay {payAmt}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 40
  },
  titleStyle: {
    alignSelf: "center",
    fontSize: 22,
    marginTop: 20,
    marginBottom: 20
  },
  buttonStyle: {
    backgroundColor: "#000",
    marginLeft: 33,
    marginRight: 33,
    height: 50,
    borderRadius: 5,
    marginTop: 20
  },
  viewStyle: {
    marginTop: 20,
    alignSelf: "center"
  },
  paymentTypeContainerStyle: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "center"
  },
  paymentTypeStyleEnabled: {
    paddingTop: 10,
    paddingLeft: 10,
    width: 170,
    height: 60,
    borderWidth: 1,
    borderRadius: 15,
    margin: 5,
    borderColor: "#000"
  },
  paymentTypeStyleDisabled: {
    paddingTop: 10,
    paddingLeft: 10,
    width: 170,
    height: 60,
    borderWidth: 1,
    borderRadius: 15,
    margin: 5,
    borderColor: "#ccc"
  }
});

export default PaymentScreen;
