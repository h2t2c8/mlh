import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableRipple } from 'react-native-paper';
import SimpleTab from './../../Materials/SimpleTab';
import Trend from './Trend';

export default function Overview(props) {
    let tabInfo = [{name:'Nadergul', value:<Trend {...props} />},
        {name:'Telangana', value:<Trend {...props} />},
        { name:'India', value:<Trend {...props} />}];
    return (<View style={styles.overviewSection}>
            <View style={styles.overviewSectionTab}>
            <View>
                <Text style={styles.overviewSectionTitle}>TRENDING TOPICS AROUND YOU</Text>
            </View>
            <SimpleTab info={tabInfo}/>
            </View>
    </View>);
}

const styles = StyleSheet.create({
    overviewSection:{ flex: 10, flexDirection:'row' },
    overviewSectionTab:{flex:2},
 overviewSectionTitle:{textAlign:'center',marginTop:10,fontSize:13,fontWeight:'bold',textTransform:'uppercase',color:'#000'},

});