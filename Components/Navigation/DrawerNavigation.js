import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView,
    DrawerItemList,
    DrawerItem } from '@react-navigation/drawer';
import HomeStackScreen from './HomeStackScreen';
import { DrawerContent } from './DrawerContent';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="HomeStackScreen" 
      drawerContent={props=><DrawerContent {...props}/>}
      drawerStyle={{
        backgroundColor: '#eee',
        width: 240,
      }}
      drawerContentOptions={{activeTintColor:'#000',activeBackgroundColor:'#eee'}}
      >
        <Drawer.Screen name="HomeStackScreen" component={HomeStackScreen} />
    </Drawer.Navigator>
  );
}