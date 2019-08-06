import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Icon } from "native-base";
const ButtonComponent = props => {
  return (
    <View
      style={{
        width: "48%",
        height: 60,
        backgroundColor: "black",
        justifyContent: "center",
        padding: 20,
        marginTop: 5,
        marginLeft: 5
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Icon name="cog" style={{ color: "white" }} />
        <Text
          style={{
            color: "white",
            marginLeft: 10,
            fontSize: 15,
            alignSelf: "center"
          }}
        >
          {props.text}
        </Text>
      </View>
    </View>
  );
};

export default ButtonComponent;
