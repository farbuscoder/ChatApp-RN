import React from 'react'

//Expo
import Constants from "expo-constants"

//React Native
import {Text, View} from "react-native"
const Main = () => {
    return ( <View style={{marginTop:Constants.statusBarHeight, flexGrow:1}}>
        <Text>Rate Repository application</Text>
    </View> );
}
 
export default Main;