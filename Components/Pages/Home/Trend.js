import React from 'react';
import { ScrollView, View, StyleSheet, Dimensions } from 'react-native';
import TLL from './TLL';
import PPI from './PPI';
import PI from './PI';

export default function Trend(props){
 return (<ScrollView style={styles.locationOverviewSectionScroll}>
    <View style={styles.locationOverviewScreen}>
        <View style={styles.locationOverviewScreenView}>
            <TLL {...props} />
            <PI {...props} />
            <PPI {...props} />
        </View>
    </View>
</ScrollView>);
}

const styles = StyleSheet.create({ 
 locationOverviewSectionScroll:{marginTop:10,width:Dimensions.get('screen').width,height:Dimensions.get('screen').height-380, flexGrow: 0.95,paddingBottom:100},
 locationOverviewScreen:{paddingLeft:0,paddingRight:0},
 locationOverviewScreenView:{flex: 1, flexWrap: 'wrap',flexShrink: 1,marginBottom:20}
});