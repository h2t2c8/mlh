import React, { useState, useEffect } from 'react';
import IntroStackScreen from './Components/Navigation/IntroStackScreen';
import AppLoading from 'expo-app-loading';
import { LogBox } from 'react-native';
import { usePreventScreenCapture } from 'expo-screen-capture';
import { Font, useFonts } from 'expo-font';

// Ignore all log notifications:
LogBox.ignoreAllLogs();

export default function App() {
  let [fontloaded]=useFonts({
    "BoogalooRegular": require('./assets/fonts/Boogaloo-Regular.otf'),
  });  
  // usePreventScreenCapture();
  if(fontloaded){ console.log("In");return <IntroStackScreen /> } 
  else { console.log("Out");return <AppLoading /> }
}

