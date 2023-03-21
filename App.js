import React from "react";

//React Native
import {
  View,
} from "react-native";

//React navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Chat from "./src/Screens/Chat.js"
import Login from "./src/Screens/Login.js"
import SignUp from "./src/Screens/SignUp.js"

//npm i --save-dev babel-eslint eslint-config-standard
//eslint-config-standard-jsx eslint-config-standard-react eslint-plugin-promise eslint-plugin-import
//eslint-plugin-node eslint-plugin-react

const Stack = createStackNavigator();


const ChatStack = () => {
  return ( <Stack.Navigator screenOptions={{headerShown:false}} >
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator> );
}

const RootNavigator =()=>{
  return(
    <NavigationContainer>
      <ChatStack/>
    </NavigationContainer>
  )
}
 


export default function App() {
  return (
   <RootNavigator/>
  );
}
