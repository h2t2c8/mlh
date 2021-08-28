import React, {useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './../Pages/HomePage';
import RLDetails from './../Pages/Stacks/RLDetails';
import RLFullDetails from './../Pages/Stacks/RLFullDetails';

const HomeStack = createStackNavigator();
export default function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
       <HomeStack.Screen options={{headerShown: false}} name="HomePage" component={HomePage}/> 
       <HomeStack.Screen options={{headerShown: false}} name="RLDetails" component={RLDetails} />      
       <HomeStack.Screen options={{headerShown: false}} name="RLFullDetails" component={RLFullDetails} />  
      </HomeStack.Navigator>
     );
}