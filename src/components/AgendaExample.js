import React, { useState } from "react";
import { View, Text } from "react-native";
import { Agenda } from "react-native-calendars";

const AgendaExample = () => {
  const [items, setItems] = useState({
    "2024-09-16": [{ name: "Meeting with client", time: "10:00 AM" }],
    "2024-09-20": [
      { name: "Team brainstorming session", time: "9:00 AM" },
      { name: "Project presentation", time: "2:00 PM" },
      { name: "Project presentation", time: "5:00 PM" }
    ],
    "2024-10-01": [
      { name: "Team brainstorming session", time: "9:00 AM" },
      { name: "Project presentation", time: "2:00 PM" }
    ],
    "2024-10-02": [
      { name: "Team brainstorming session", time: "9:00 AM" },
      { name: "Project presentation", time: "2:00 PM" }
    ]
  });

  return (
    <View style={{ flex: 1, marginHorizontal: 10 }}>
      <Agenda
        items={items}
        renderItem={item =>
          <View
            style={{
              marginVertical: 10,
              marginTop: 30,
              backgroundColor: "white",
              marginHorizontal: 10,
              padding: 10
            }}
          >
            <Text style={{ fontWeight: "bold" }}>
              {item.name}
            </Text>
            <Text>
              {item.time}
            </Text>
          </View>}
      />
    </View>
  );
};

export default AgendaExample;
