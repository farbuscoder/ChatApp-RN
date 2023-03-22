import React,{useState} from 'react'

//React native
import { StyleSheet,Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity,Alert } from 'react-native'

//Firebase
import {createUserWithEmailAndPassword} from "firebase/auth"

//Config
import {auth} from "./../config/Firebase";

//Image
//const backImage = require("../assets/backImage.png");


const SignUp = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onHandleSignUp = ()=>{
        if(email !== "" || password !==""){
            createUserWithEmailAndPassword(auth, email, password)
            .then(()=>console.log("SignUp Sucess"))
            .catch((err)=>Alert.alert("SignUp error", err.message))
        }
    }

    return ( 
    <View style={styles.container} >
        <Image source={require("../assets/backImage.png")} style={styles.backImage} />
        <View style={styles.whiteSheet} />
        <SafeAreaView style={styles.form} >
          <Text style={styles.title}>Sign Up</Text>
          <TextInput
          style={styles.input}
          placeholder="Enter Email"
          autoCapitalize='none'
          keyboardType='email-address'
          textContentType='emailAddress'
          autoFocus={true}
          value={email}
          onChangeText={(text)=>setEmail(text)}
          />
          <TextInput
          style={styles.input}
          placeholder="Enter password"
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry={true}
          textContentType='password'
          autoFocus={true}
          value={password}
          onChangeText={(text)=>setPassword(text)}
          />
          <TouchableOpacity style={styles.button} onPress={onHandleSignUp} >
            <Text style={{fontWeight:'bold', color:"#fff", fontSize:18}} >Sign Up</Text>
          </TouchableOpacity>
          <View style={{marginTop:20, flexDirection:'row', alignItems:"center", alignSelf:"center"}} >
            <Text style={{color:"gray",fontWeight:"600", fontSize:14}}>Already have an account? </Text>
            <TouchableOpacity onPress={()=>navigation.navigate("SignIn")} >
            <Text style={{fontWeight:'bold', color:"#f57c00", fontSize:14}} >Sign In</Text>
          </TouchableOpacity>
          </View>
        </SafeAreaView>
    </View> );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
      },
      title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: "orange",
        alignSelf: "center",
        paddingBottom: 24,
      },
      input: {
        backgroundColor: "#F6F7FB",
        height: 58,
        marginBottom: 20,
        fontSize: 16,
        borderRadius: 10,
        padding: 12,
      },
      backImage: {
        width: "100%",
        height: 340,
        position: "absolute",
        top: 0,
        resizeMode: 'cover',
      },
      whiteSheet: {
        width: '100%',
        height: '75%',
        position: "absolute",
        bottom: 0,
    
        backgroundColor: '#fff',
        borderTopLeftRadius: 60,
      },
      form: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 30,
        border:"4px solid red"
      },
      button: {
        backgroundColor: '#f57c00',
        height: 58,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      },
})
 
export default SignUp;