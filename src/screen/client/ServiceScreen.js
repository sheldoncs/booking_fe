import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image
} from "react-native";
import { Context } from "../../context/BookingContext";
import Service from "../../components/services/service";

const ServiceScreen = ({ navigation }) => {
  const { state, listServices } = useContext(Context);
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await listServices(state.token);
      setResults(res);
    }
    getData();
  }, []);

  const displayResults = () => {
    return (
      <View style={{ height: 700, overflow: "scroll" }}>
        <FlatList
          style={styles.container}
          data={results}
          keyExtractor={result => result.id}
          renderItem={({ item }) => {
            return (
              <Service
                id={item.id}
                price={item.price}
                service={item.service}
                photo={item.photo}
                navigation={navigation}
              />
            );
          }}
        />
      </View>
    );
  };

  return (
    <View style={{ backgroundColor: "#fff" }}>
      <View style={styles.headerStyle}>
        <Text style={styles.titleStyle}>Service</Text>
      </View>
      <View>
        {displayResults()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#0F5A75",
    justifyContent: "center",
    marginBottom: 0,
    height: 70
  },
  titleStyle: {
    textTransform: "uppercase",
    color: "#fff",
    alignSelf: "center",
    fontSize: 25,
    marginTop: 20,
    marginBottom: 12
  }
});

export default ServiceScreen;
