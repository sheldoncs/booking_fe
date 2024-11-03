import React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";




const TimeSlots = ({ id, time, limit, setSlotId, used, balance, setAppointmentTime }) => {





    const callBack = () => {
        setSlotId(id);
        setAppointmentTime();
    }

    return (
        <TouchableOpacity onPress={() => callBack()}>
            <View style={styles.viewStyle}>
                <View style={styles.displayStyle}>
                    <View style={styles.descriptionStyle}><Text style={{ color: "#fff" }}>Daily Limit : {limit}</Text></View>
                    <Text style={{ fontSize: 19, margin: 3, color: "#fff" }}>{time}</Text>
                    <View style={styles.descriptionStyle}><Text style={{ color: "#fff" }}>Slots Used : {used}</Text></View>

                </View>
                <View style={{ justifyContent: "center", color: "#fff" }}><Text style={{ color: "#fff" }}>Remaining Slots : {balance}</Text></View>
                <View style={{ justifyContent: "center", marginRight: 10 }}>

                    <MaterialIcons
                        name="keyboard-double-arrow-right"
                        size={30}
                        color="#C3E6F7"
                    />

                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    balanceStyle: {
        display: "flex",
        color: "#fff",
        justifyContent: "center",
        fontSize: 17,
    },
    descriptionStyle: {
        display: "flex",
        flexDirection: "row",
        color: "#fff",
        fontSize: 15
    },
    viewStyle: {
        display: "flex",
        flexDirection: "row",
        margin: 10,
        justifyContent: "space-between",
        height: 100,
        borderRadius: 20,
        backgroundColor: "#0F5A75",
        borderWidth: 2,
        borderColor: "#fff",
        justifyContent: "space-between"

    },
    displayStyle: {
        display: "flex",
        flexDirection: "column",
        marginLeft: 10,
        justifyContent: "center"
    }

});

export default TimeSlots;
