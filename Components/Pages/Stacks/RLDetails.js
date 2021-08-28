import React,{useState, useEffect} from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation, useRoute  } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Avatar } from 'react-native-paper';
import { COLORS } from '../../Utils/Colors';

export default function RLDetails() {
    const navigation = useNavigation();
    const route = useRoute();
    const [data, setData] = useState({});
        
    useEffect(() => {
    (async () => { 
        setData({ userName: route.params.userName,
            profilePic: route.params.profilePic});
    })(); }, []);
    
    return (<ScrollView style={styles.rLDetailsScrollView}>
    <View style={styles.rLDetailsView}>

        <View style={styles.rLDetailsTopSectionView}>
            <View style={styles.rLDetailsBackButtonView}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FontAwesome5 name="arrow-circle-left" style={styles.rLDetailsBackButton} size={24} />
                </TouchableOpacity>
            </View>
            <View style={styles.rLDetailsBasicInfoView}>
                <View style={styles.rLDetailsGeneralInfoView}>
                    <View style={styles.rLDetailsProfilePicView}>
                        <Avatar.Image source={{uri:data.profilePic}} size={60} />
                    </View>
                    <View style={styles.rLDetailsTitleView}>
                        <Text style={styles.rLDetailsTitle}>{data.userName}</Text>
                        <Text style={styles.userType}>Political Party Volunteer</Text>
                    </View>
                </View>
            </View>
        </View>

        <View style={{flex:3,flexDirection:'row',marginTop:10,paddingTop:5,paddingBottom:5,borderWidth:1,borderColor:'#ccc',borderRadius:8,backgroundColor:'#eee'}}>

            <View style={{flex:1.2,padding:8}}>
                <View style={{flexDirection:'row'}}>
                    <FontAwesome5 name="box-tissue" style={{color:COLORS.DARK_VOILET}} size={24} />
                    <Text style={{fontWeight:'bold',paddingLeft:10,marginTop:5,color:COLORS.DARK_VOILET}}>Ballot Box</Text>
                </View>
                <Text style={{borderBottomWidth:1,borderBottomColor:'#ccc',padding:8,textAlign:'right',color:'#777',fontSize:13,fontWeight:'bold'}}>239999 Votes</Text>
                <Text style={{padding:8,textAlign:'right',color:'#777',fontSize:13,fontWeight:'bold'}}>239999 Votes</Text>
                <Text style={{paddingBottom:2,paddingRight:6,textAlign:'right',color:'#777',fontSize:13,fontWeight:'bold'}}>(Out of Total Votes)</Text>
            </View>

            <View style={{flex:1.8,padding:8,borderLeftWidth:1,borderLeftColor:'#ccc'}}>
                <View style={{justifyContent:'center',flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#ccc',paddingBottom:10}}>
                    <FontAwesome5 name="user-friends" style={{color:COLORS.DARK_VOILET}} size={24} />
                    <Text style={{fontWeight:'bold',paddingLeft:10,marginTop:5,color:COLORS.DARK_VOILET}}>Public Issues</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{borderRightWidth:1,borderRightColor:'#ccc',flex:1}}>
                        <Text style={{paddingTop:10,textAlign:'center',color:COLORS.DARK_VOILET,fontWeight:'bold',paddingBottom:8,borderBottomWidth:1,borderBottomColor:'#ccc'}}>
                        Participated
                        </Text>
                        <Text style={{paddingTop:8,paddingBottom:8,textAlign:'center',fontWeight:'bold',fontSize:20}}>1000</Text>
                    </View>
                    <View style={{flex:0.8}}>
                        <Text style={{paddingTop:10,textAlign:'center',color:COLORS.DARK_VOILET,fontWeight:'bold',paddingBottom:8,borderBottomWidth:1,borderBottomColor:'#ccc'}}>
                        Resolved
                        </Text>
                        <Text style={{paddingTop:8,paddingBottom:8,textAlign:'center',fontWeight:'bold',fontSize:20}}>1000</Text>
                    </View>
                </View>
            </View>
            
        </View>

    </View>
    </ScrollView>);
}

const styles = StyleSheet.create({ 
    rLDetailsScrollView: {marginTop:10,width:Dimensions.get('screen').width,height:Dimensions.get('screen').height-100, flexGrow: 0.95,paddingBottom:100},
    rLDetailsView: {flex:16,margin:15},
    rLDetailsTopSectionView: {flex:4,flexDirection:'row'},
    rLDetailsBackButtonView: {flex:0.5},
    rLDetailsBackButton: {color:COLORS.DARK_PARROTGREEN,marginTop:15},
    rLDetailsBasicInfoView:{flex:3.5},
    rLDetailsGeneralInfoView:{flexDirection:'row'},
    rLDetailsProfilePicView:{flex:0.75},
    rLDetailsTitleView:{flex:2.75,marginLeft:8 },
    rLDetailsTitle:{fontSize:16,fontWeight:'bold'},

    userType:{ marginTop:5,fontWeight:'bold',alignSelf: 'flex-start',borderRadius:4, paddingLeft:8,paddingRight:8,paddingTop:5,paddingBottom:5,backgroundColor:'#b50541', color:'#fff',fontSize:12,lineHeight:14 },
});