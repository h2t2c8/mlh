import React, {useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './../Pages/HomePage';

const HomeStack = createStackNavigator();
export default function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
       <HomeStack.Screen options={{headerShown: false}} name="HomePage" component={HomePage} />       
      </HomeStack.Navigator>
     );
}