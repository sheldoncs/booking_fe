import React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Service = ({ navigation, id, service, price, photo }) => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.boxWithShadow}>
        <Image
          style={{
            display: "flex",
            width: 80,
            height: 80,
            borderWidth: 2,
            borderColor: "#fff",
            borderRadius: 10
          }}
          source={{ uri: photo }}
        />
      </View>
      <View style={styles.textStyle}>
        <Text
          style={{
            fontSize: 14,
            color: "#fff"
          }}
        >
          {service}
        </Text>
        <Text
          style={{
            fontSize: 19,
            color: "#fff"
          }}
        >
          {price.toFixed(2)}
        </Text>
      </View>

      <View
        style={{
          display: "flex",
          alignContent: "flex-end",
          alignSelf: "center",
          width: 300
        }}
      >
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Appointment", { id, service, price })}
        >
          <MaterialIcons
            name="keyboard-double-arrow-right"
            size={30}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#0F5A75",
    height: 100,
    borderWidth: 2,
    borderColor: "#8DD7F0"
  },
  textStyle: {
    fontSize: 22,
    paddingLeft: 2,
    paddingRight: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "#fff",
    width: 180
  },
  boxWithShadow: {
    marginRight: 70,
    alignSelf: "center"
  }
});

export default Service;
