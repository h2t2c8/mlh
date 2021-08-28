import React,{useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation, useRoute  } from '@react-navigation/native';

export default function RLFullDetails() {
    const navigation = useNavigation();
    const route = useRoute();
        
    useEffect(() => {
    (async () => { 
       // console.log(route.params.userName);
        navigation.setOptions({ headerTitle: 'Rising Leaders / Political Party Volunteers List' })
    })(); }, []);
    return (<View>
        <Text>Hi</Text>
    </View>);
}

const styles = StyleSheet.create({ 

});