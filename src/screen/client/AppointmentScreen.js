import Reac, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView
} from "react-native";
import {
  Calendar,
  LocaleConfig,
  CalendarList,
  Agenda
} from "react-native-calendars";
import TimeSlots from "../../components/scheduledtimes/timeSlots";
import { Context } from "../../context/BookingContext";

const AppointmentScreen = ({ navigation }) => {
  const {
    state,
    getAllottedTimeInfo,
    getCurrrentTimeSlotBalanceInfo
  } = useContext(Context);

  const [selectedDate, setSelectedDate] = useState("");
  const [results, setResults] = useState([]);
  const [slotId, setSlotId] = useState(0);
  const [appointmentTime, setAppointmentTime] = useState("");

  useEffect(
    () => {
      if (slotId) {
        navigation.navigate("Summary", {
          slotId,
          serviceId: navigation.getParam("id"),
          service: navigation.getParam("service"),
          price: navigation.getParam("price"),
          selectedDate,
          appointmentTime
        });
      }
    },
    [slotId]
  );

  useEffect(() => {
    if (state && state.token && !state.slots) {
      async function getData() {
        const items = await getAllottedTimeInfo(state.token);
        setResults(items);
      }
      getData();
    }
  }, []);

  useEffect(
    () => {
      if (selectedDate) {
        let tempResults = results;

        async function getData() {
          tempResults.map((item, index) => {
            getCurrrentTimeSlotBalanceInfo(
              selectedDate,
              item.id,
              state.token
            ).then(data => {
              setResults(prevResults => {
                return prevResults.map(
                  result =>
                    result.id === item.id
                      ? {
                          ...result,
                          used: data.results[0].slotbalance,
                          balance:
                            Number(result.clientlimit) -
                            Number(data.results[0].slotbalance)
                        }
                      : result
                );
              });
            });
          });
        }
        getData();
      }
    },
    [selectedDate]
  );

  const listScheduledTimes = () => {
    return (
      <View style={{ height: 410, overflow: "scroll" }}>
        <FlatList
          style={styles.container}
          data={results}
          keyExtractor={result => result.id}
          renderItem={({ item }) => {
            return (
              <TimeSlots
                setSlotId={id => setSlotId(id)}
                setAppointmentTime={() => setAppointmentTime(item.time)}
                id={item.id}
                time={item.time}
                limit={item.clientlimit}
                used={item.used}
                balance={item.balance}
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
      <View>
        <Calendar
          onDayPress={day => {
            setSelectedDate(day.dateString);
          }}
          markedDates={{
            [selectedDate]: {
              selected: true,
              marked: true,
              selectedColor: "#5FB8D9"
            },
            "2024-09-16": {
              selected: true,
              disableTouchEvent: true,
              selectedColor: "grey"
            }
          }}
        />
      </View>
      <View>
        <Text style={styles.textStyle}>Select A Time Slot</Text>
      </View>

      {listScheduledTimes()}
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    height: 50,
    overflow: "auto"
  },
  textStyle: {
    textTransform: "uppercase",
    color: "#0F5A75",
    alignSelf: "center",
    fontSize: 20,
    marginBottom: 20,
    marginTop: 20
  },
  headerStyle: {
    backgroundColor: "#0F5A75",
    marginTop: 20,
    marginBottom: 28,
    height: "45px",
    zIndex: 1000
  }
});

export default AppointmentScreen;
