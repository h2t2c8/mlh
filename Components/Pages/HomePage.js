import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { COLORS } from './../Utils/Colors';
import Header from './Home/Header';
import Welcome from './Home/Welcome';
import Overview from './Home/Overview';

export default function HomePage(props) { 
    return (<View style={styles.homeContainer}>
        <Header {...props} />
        <Welcome {...props}/>
        <Overview {...props}/>
        <StatusBar backgroundColor={COLORS.DARK_VOILET} style="light"  translucent={false}  />
    </View>);
}

const styles = StyleSheet.create({  
 homeContainer:{ flex: 1, flexDirection:'column', backgroundColor:'#f2a9ff' },
});