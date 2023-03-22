import React,{useState, createContext, useContext, useEffect} from "react";

//React Native
import {
  View, ActivityIndicator
} from "react-native";

//Firebase
import { onAuthStateChanged } from "firebase/auth";

//Condig
import {auth} from "./config/Firebase"

//React navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Chat from "./Screens/Chat.js"
import Login from "./Screens/Login.js"
import SignUp from "./Screens/SignUp.js"
import Home from "./Screens/Home.js"

//npm i --save-dev babel-eslint eslint-config-standard
//eslint-config-standard-jsx eslint-config-standard-react eslint-plugin-promise eslint-plugin-import
//eslint-plugin-node eslint-plugin-react

const Stack = createStackNavigator();
const AuthenticatedUserContext = createContext({})

const AuthenticatedUserProvider = ({children})=>{
  const [user, setUser] = useState(null)
  return (
    <AuthenticatedUserContext.Provider value={{user,setUser}}>
{children}
    </AuthenticatedUserContext.Provider>
  )
}


const ChatStack = () => {
  return ( <Stack.Navigator defaultScreenOptions={Login} >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Chat" component={Chat} />
  </Stack.Navigator> );
}

const AuthStack = () => {
  return ( <Stack.Navigator  screenOptions={{headerShown:false}} >
    <Stack.Screen name="SignIn" component={Login} />
    <Stack.Screen name="SignUp" component={SignUp} />
  </Stack.Navigator> );
}


const RootNavigator =()=>{
  const {user, setUser}= useContext(AuthenticatedUserContext)
  const[loading, setLoading] = useState(true)

  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,async(authenticatedUser)=>{
      authenticatedUser ? setUser(authenticatedUser):setUser(null);
      setLoading(false)
    })

    return ()=>unsubscribe();
  },[user])

  if(loading){
    return(
      <View  style={{flex:1, justifyContent:"center",alignItems:"center"}}>
        <ActivityIndicator size="large" />
      </View>
    )
  }
  
  return(
    <NavigationContainer>
      {user?<ChatStack/>:<AuthStack/>}
    </NavigationContainer>
  )
}
 


export default function App() {
  return (
    <AuthenticatedUserProvider>
      <RootNavigator/>
    </AuthenticatedUserProvider>
  );
}
