/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList
} from "react-native";
import TimePicker from "react-native-24h-timepicker";
import { Container, Header, Left, Title } from "native-base";

import Button from "./App/Components/Button";

function App() {
  const [score, setScore] = useState(0);
  const [hour, setHour] = useState(new Date().getHours());
  const [minute, setMinutes] = useState(new Date().getMinutes());
  const [down, setDown] = useState(1);
  const [toGo, setToGO] = useState(10);
  const [ball, setBall] = useState(40);
  const [qtr, setQtr] = useState(1);

  const TimePickerRef = useRef(null);
  function TeamAndTime() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              Team 1 Name
            </Text>
            <Text
              style={{ fontWeight: "bold", fontSize: 16, alignSelf: "center" }}
            >
              {score.toString().length == 1 ? "0" + score : score}
            </Text>
          </View>
          <Picker />
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              Team 1 Name
            </Text>
            <Text
              style={{ fontWeight: "bold", fontSize: 18, alignSelf: "center" }}
            >
              {score.toString().length == 1 ? "0" + score : score}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20
          }}
        >
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Down</Text>
            <Text
              style={{ fontWeight: "bold", fontSize: 13, alignSelf: "center" }}
            >
              {down}
            </Text>
          </View>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>To Go</Text>
            <Text
              style={{ fontWeight: "bold", fontSize: 13, alignSelf: "center" }}
            >
              {toGo}
            </Text>
          </View>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Ball On</Text>
            <Text
              style={{ fontWeight: "bold", fontSize: 13, alignSelf: "center" }}
            >
              {ball}
            </Text>
          </View>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Qtr</Text>
            <Text
              style={{ fontWeight: "bold", fontSize: 13, alignSelf: "center" }}
            >
              {qtr}
            </Text>
          </View>
        </View>
        <RenderButton />
        <DisplayLog />
        <DisplayMainButtons />
      </View>
    );
  }
  return <TeamAndTime />;

  function Picker() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => TimePickerRef.current.open()}
          style={styles.button}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.text}>{hour}</Text>
            <Text style={styles.text}> : </Text>
            <Text style={styles.text}>{minute}</Text>
          </View>
        </TouchableOpacity>
        <TimePicker
          selectedHour={hour.toString()}
          selectedMinute={minute.toString()}
          ref={TimePickerRef}
          onCancel={() => onCancel()}
          onConfirm={(hour, minute) => onConfirm(hour, minute)}
        />
      </View>
    );
  }

  function RenderButton() {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20
        }}
      >
        <TouchableOpacity
          style={{
            height: 40,
            width: "48%",
            backgroundColor: "green",
            borderRadius: 3,
            marginLeft: 5,
            justifyContent: "center"
          }}
        >
          <Text style={{ alignSelf: "center", color: "white", fontSize: 22 }}>
            Timeout
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 40,
            width: "48%",
            backgroundColor: "green",
            borderRadius: 3,
            marginRight: 5,
            justifyContent: "center"
          }}
        >
          <Text style={{ alignSelf: "center", color: "white", fontSize: 18 }}>
            End 1st Quater
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  function DisplayLog() {
    return (
      <View style={{ height: 300, width: "100%" }}>
        <FlatList
          data={["lorem ispum", "lorem ispum"]}
          keyExtractor={(item, index) => item.toString()}
          renderItem={({ item, index }) => (
            <View>
              <Text>{item}</Text>
            </View>
          )}
        />
      </View>
    );
  }

  function DisplayMainButtons() {
    return (
      <View
        style={{
          position: "absolute",
          bottom: 0,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 4
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Button text={"Special Team"} />
          <Button text={"Penalty"} index={2} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Button text={"Run"} />
          <Button text={"Pass"} index={2} />
        </View>
      </View>
    );
  }

  function onCancel() {
    TimePickerRef.current.close();
  }

  function onConfirm(hour, minute) {
    setHour(hour);
    setMinutes(minute);
    TimePickerRef.current.close();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 100
  },
  text: {
    fontSize: 20,
    marginTop: 10
  },
  button: {
    backgroundColor: "#4EB151",
    paddingVertical: 5,
    paddingHorizontal: 17,
    borderRadius: 3,
    margin: 10
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600"
  }
});

export default App;
