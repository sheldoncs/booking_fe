import React, { useContext, useEffect } from "react";
import { Context } from "../../context/BookingContext";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const QRCodeScreen = ({ navigation }) => {
  const { state, getQRCodeInfo } = useContext(Context);

  useEffect(() => {
    async function getData() {
      /*Make sure an appointment actually exist*/
      const result = await getQRCodeInfo(state.email, state.token);
    }
    getData();
  }, []);

  return (
    <View>
      <Image />
    </View>
  );
};

const styles = StyleSheet.create({});

export default QRCodeScreen;
