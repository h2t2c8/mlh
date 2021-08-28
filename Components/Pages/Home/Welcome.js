import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from './../../Utils/Colors';

export default function Welcome(){
    return (<View style={styles.homeTopSection}>
        <View style={styles.homeTopLeftSection}>
            <Text style={styles.userGreetings}>Hi Anup, Good Morning !!!</Text>
            <Text style={styles.userLocationDisplay1}>Nadergul, Ranga Reddy Dist, </Text>
            <Text style={styles.userLocationDisplay2}>Telangana, India - 501510</Text>
        </View>
        <View style={styles.homeTopRightSection}>
            <View style={{}}>
                <Text style={styles.userLocationInfoEditButton}>Change</Text>
            </View>
        </View> 
      </View>);
}

const styles = StyleSheet.create({ 
    homeTopSection: { flex: 2, flexDirection:'row', backgroundColor:COLORS.WHITE,borderBottomRightRadius:30,borderBottomLeftRadius:30 },
    homeTopLeftSection:{ flex:3,marginLeft:20,marginTop:5 },
    userGreetings:{fontFamily:'BoogalooRegular',fontSize:18,color:'black'},
    userLocationDisplay1:{fontSize:14,paddingTop:4,color:'#555'},
    userLocationDisplay2:{fontSize:14,paddingTop:4,color:'#555'},
    homeTopRightSection:{flex:0.85,marginRight:20,marginTop:30},
    userLocationInfoEditButton:{fontSize:12,borderWidth:2,borderRadius:8,color:COLORS.DARK_VOILET,borderColor:COLORS.DARK_VOILET,backgroundColor:COLORS.WHITE,padding:5,textAlign:'center',fontWeight:'bold'}

});