import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { CardStyleInterpolators } from '@react-navigation/stack';
import {ToastAndroid} from 'react-native';
import firebase from './config';
import AuthContext from './context/AuthContext';
import screens from "./screen/index";
import success from "./screen/success";

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

function FirebaseStackNavigation() {
  const [state, dispatch] = React.useReducer(
      (prevState, action) => {
        switch (action.type) {
          case 'RESTORE_TOKEN':
          case 'LOGIN':
            return {
              ...prevState,
              uid: action.uid,
              isLogout: false,
            };
          case 'LOGOUT':
            return {
              ...prevState,
              uid: null,
              isLogout: true,
            };
        }
      },
      {isLogout: false, uid: null},
  );
  React.useEffect(() => {
    async function bootstrapAsync() {
      let uid;
      try {
        uid = await AsyncStorage.getItem('uid');
      } catch (err) {
        console.error(err);
        uid = null;
      }
      dispatch({type: 'RESTORE_TOKEN', uid});
    }
    bootstrapAsync();
  }, []);
  const authContext = React.useMemo(() => ({
    async login({email, password}) {
      try {
        const data = await firebase.auth().signInWithEmailAndPassword(email, password);
        const uid = data.user.uid;
        await AsyncStorage.setItem('uid', uid);
        dispatch({type: 'LOGIN', uid});
      } catch (err) {
        ToastAndroid.show(err.message, ToastAndroid.LONG);
      }
    },
    async signup({email, password}) {
      try {
        const data = await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = data.user.uid;
        await AsyncStorage.setItem('uid', uid);
        dispatch({type: 'LOGIN', uid});
      } catch (err) {
        ToastAndroid.show(err.message, ToastAndroid.LONG);
      }
    },
    async logout() {
      try {
        await AsyncStorage.removeItem('uid');
        dispatch({type: 'LOGOUT'});
      } catch (err) {
        console.error(err);
      }
    },
  }));
  return (
    <AuthContext.Provider value={authContext}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
        }}
      >
         {screens.map((screen) => (
        <Stack.Screen
        key={screen.name}
        name={screen.name}
        component={screen.component}
        options={screen.options}
        />
      ))}
      </Stack.Navigator>
    </AuthContext.Provider>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <FirebaseStackNavigation/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};