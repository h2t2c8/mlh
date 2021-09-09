import React, {useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './../Pages/HomePage';
import RLDetails from './../Pages/Stacks/RLDetails';
import RLFullDetails from './../Pages/Stacks/RLFullDetails';
import PTDetails from './../Pages/Stacks/PTDetails';

const HomeStack = createStackNavigator();
export default function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
       <HomeStack.Screen options={{headerShown: false}} name="HomePage" component={HomePage}/> 
       <HomeStack.Screen options={{title:'Candidate Profile'}} name="RLDetails" component={RLDetails} />      
       <HomeStack.Screen options={{headerShown: false}} name="RLFullDetails" component={RLFullDetails} />  
       <HomeStack.Screen options={{title:'Public Topic'}} name="PTDetails" component={PTDetails} />  
      </HomeStack.Navigator>
     );
}