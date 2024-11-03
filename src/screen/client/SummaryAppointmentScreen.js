import React, { useEffect, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Context } from "../../context/BookingContext";

const SummaryAppointmentScreen = ({ navigation }) => {
  const {state, addAppointment} = useContext(Context);

  useEffect(() => {
    console.log(
      `${navigation.getParam("slotId")} ${navigation.getParam(
        "serviceId"
      )} ${navigation.getParam("price")} ${navigation.getParam(
        "service"
      )} ${navigation.getParam("selectedDate")} ${navigation.getParam(
        "appointmentTime"
      )}`
    );
  }, []);

  const confirmAppointment = async () => {
    
    const result = await addAppointment(state.clientId, 
                                        navigation.getParam("serviceId"),
                                        navigation.getParam("selectedDate"),
                                        navigation.getParam("slotId"), state.token);
    console.log(result.data);
    navigation.navigate("Payment", {
      confirmationNumber: result.data.confirmationCode,
      price:navigation.getParam("price")
    });
  }

  return (
    <>
        <View style={styles.viewStyle}>
        <Text style={styles.headerStyle}>SUMMARY</Text>
        </View>
        <View style={styles.viewResultStyle}>
            <Text style={styles.textStyle}>Service</Text>
            <Text style={styles.textStyle}>{navigation.getParam("service")}</Text>
        </View>
        <View style={styles.viewResultStyle}>
            <Text style={styles.textStyle}>Price</Text>
            <Text style={styles.textStyle}>{navigation.getParam("price").toFixed(2)}</Text>
        </View>
        <View style={styles.viewResultStyle}>
            <Text style={styles.textStyle}>Appointment Date</Text>
            <Text style={styles.textStyle}>{navigation.getParam("selectedDate")}</Text>
        </View>
        <View style={styles.viewResultStyle}>
            <Text style={styles.textStyle}>Appointment Time</Text>
            <Text style={styles.textStyle}>{navigation.getParam("appointmentTime")}</Text>
        </View>
        <View style={styles.confirmButtonStyle}>
          <TouchableOpacity onPress={()=>confirmAppointment()}>  
            <Text style={styles.buttonTextStyle}>CONFIRM</Text>
          </TouchableOpacity>
        </View>
        
    </>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "#fff",
    height: 80,
    marginLeft: 3,
    marginRight: 3
  },
  viewResultStyle: {
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    backgroundColor: "#fff",
    marginTop:3,
    height:80,
    marginLeft: 3,
    marginRight: 3,
    paddingLeft:20,
    paddingRight:20,
  },
  textStyle : {
    fontSize:20,
    alignSelf: "center",
  },
  headerStyle: {
    marginTop: 25,
    fontSize: 20,
    alignSelf: "center",
    color: "#0F5A75"
  },
  confirmButtonStyle: {
    width:"100%",
    bottom:0,
    position:"absolute",
    backgroundColor:"#0F5A75",
    height:80,
    borderBottomLeftRadius:0,
    borderBottomRightRadius:0,
    
  },
  buttonTextStyle:{
    color:"#fff",
    alignSelf:"center",
    fontSize:20,
    marginTop:25
  }
});

export default SummaryAppointmentScreen;
