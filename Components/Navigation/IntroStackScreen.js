import React, {useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Categories from './../Pages/Intro/Categories';
import HomePage from '../Pages/HomePage';
import RLDetails from '../Pages/Stacks/RLDetails';
import RLFullDetails from '../Pages/Stacks/RLFullDetails';
import PTDetails from '../Pages/Stacks/PTDetails';
import AppNavigator from './../Navigation/AppNavigator';

const IntroStack = createStackNavigator();
export default function IntroStackScreen() {
    return (
      <NavigationContainer>
        <IntroStack.Navigator>
          <IntroStack.Screen options={{headerShown: false,gestureEnabled: false}} name="HomePage" component={Categories}/> 
          <IntroStack.Screen options={{headerShown: false}} name="AppNavigator" component={AppNavigator} />
        </IntroStack.Navigator>
      </NavigationContainer>
     );
}