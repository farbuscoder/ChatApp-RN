import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";

//Components
import Main from "./src/Components/Main.jsx"

//npm i --save-dev babel-eslint eslint-config-standard
//eslint-config-standard-jsx eslint-config-standard-react eslint-plugin-promise eslint-plugin-import
//eslint-plugin-node eslint-plugin-react

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback
        style={styles.Touch}
        onPress={() => {
          Alert.alert("Pressed");
        }}
      >

        <Text>Press Me</Text>
      </TouchableNativeFeedback>
        <Main/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
