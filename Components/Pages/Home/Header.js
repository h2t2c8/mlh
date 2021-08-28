import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableRipple } from 'react-native-paper';
import { COLORS } from '../../Utils/Colors';

export default function Header(props) {
    return (<View style={styles.homeheader}>
        <View style={styles.homeheaderLeftSection}>
        <Image style={{width:130,height:40,marginTop:10,marginLeft:15}} source={require('./../../../assets/logo.png')} />
        </View>
        <View style={styles.homeheaderRightSection}>
           <TouchableRipple onPress={()=>{ props.navigation.toggleDrawer(); }} >
               <MaterialIcons name="menu-open" style={styles.iconMenuOpen} size={36} />
           </TouchableRipple>
        </View>
     </View>);
}

const styles = StyleSheet.create({
    homeheader:{ flex: 1, flexDirection:'row',backgroundColor:COLORS.WHITE },
    homeheaderLeftSection:{ flex: 8 },
    homeheaderRightSection:{ flex: 1 },
    iconMenuOpen:{ marginTop:4, paddingTop:6, paddingLeft:4, color:COLORS.DARK_VOILET },
});