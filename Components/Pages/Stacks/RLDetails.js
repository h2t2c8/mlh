import React,{useState, useEffect} from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation, useRoute  } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Avatar } from 'react-native-paper';
import { COLORS } from '../../Utils/Colors';
import { AdMobBanner, PublisherBanner } from 'expo-ads-admob';

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
            {/*<View style={styles.rLDetailsBackButtonView}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FontAwesome5 name="arrow-circle-left" style={styles.rLDetailsBackButton} size={24} />
                </TouchableOpacity>
            </View>*/}
            <View style={styles.rLDetailsBasicInfoView}>
                <View style={styles.rLDetailsGeneralInfoView}>
                    <View style={styles.rLDetailsProfilePicView}>
                        <Avatar.Image source={{uri:data.profilePic}} size={60} />
                    </View>
                    <View style={styles.rLDetailsTitleView}>
                        <Text style={styles.rLDetailsTitle}>{data.userName}</Text>
                        <Text style={styles.spanLabelRed}>Political Party Volunteer</Text>
                    </View>
                </View>
            </View>
        </View>

        <View style={styles.mTop10}>
            <Text style={styles.profileSectionHeader}>About Me</Text>
            <Text style={styles.sectionText}>
                Introduce yourself - Say about your background - from where you are, your ancestors.
            </Text>
        </View>

        <View style={{flex:3,marginTop:10,flexDirection:'row'}}>
            <View style={{flex:1}}>
                <Text style={{fontWeight:'bold'}}>My Qualification</Text>
            </View>
            <View style={{flex:0.1}}>
                <Text style={{fontWeight:'bold'}}>-</Text>
            </View>
            <View style={{flex:1.9}}>
                <Text style={{color:'#777'}}>Describes Education Qualification</Text>
            </View>
        </View>

        <View style={{flex:3,marginTop:10,flexDirection:'row'}}>
            <View style={{flex:1.1}}>
                <Text style={{fontWeight:'bold'}}>Current Profession</Text>
            </View>
            <View style={{flex:0.1}}>
                <Text style={{fontWeight:'bold'}}>-</Text>
            </View>
            <View style={{flex:1.8}}>
                <Text style={{color:'#777'}}>Describes what is the work you are doing</Text>
            </View>
        </View>

        <View style={{flex:3,marginTop:10,flexDirection:'row'}}>
                <Text style={{flex:0.8,fontWeight:'bold'}}>I am living at</Text>
                <Text style={{flex:2.2,color:'#777',paddingLeft:5,flexWrap:'wrap',paddingRight:10}}>
                    Nadargul (Rural), Ranga Reddy District, Telangana, India - 501510
                </Text>
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
		
		<TouchableOpacity style={{alignSelf:'flex-end',marginTop:10,flexDirection:'row',borderRadius:8,padding:8,borderWidth:1,borderColor:'blue'}}>
			<FontAwesome5 name="box-tissue" style={{color:'blue'}} size={16} />
			<Text style={{paddingLeft:10,fontWeight:'bold',textAlign:'right',color:'blue'}}>
			 Cast My Vote to Candidate
			</Text>
		</TouchableOpacity>

        {/*<View style={{marginTop:15,marginLeft:-15}}>
        <AdMobBanner
            bannerSize="smartBannerPortrait"
            adUnitID="ca-app-pub-3940256099942544/6300978111" 
            servePersonalizedAds/>
        </View> */}
        

        <View style={{marginTop:25}}>
            <Text style={styles.profileSectionHeader}>My Political Topics</Text>
            <Text style={styles.sectionText}>I stand and support for -</Text>
            <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                <Text style={styles.spanLabelGreen}>Quality Education</Text>
                <Text style={styles.spanLabelGreen}>Voting Rights</Text>
                <Text style={styles.spanLabelGreen}>Lower Taxes</Text>
                <Text style={styles.spanLabelGreen}>Immigration Reforms</Text>
                <Text style={styles.spanLabelGreen}>Privatization of Healthcare</Text>
                <Text style={styles.spanLabelGreen}>Increasing Military Forces for National Security</Text>
            </View>
            <Text style={styles.sectionText}>And I oppose for -</Text>
            <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                <Text style={styles.spanLabelRed}>Quality Education</Text>
                <Text style={styles.spanLabelRed}>Voting Rights</Text>
                <Text style={styles.spanLabelRed}>Lower Taxes</Text>
                <Text style={styles.spanLabelRed}>Immigration Reforms</Text>
                <Text style={styles.spanLabelRed}>Privatization of Healthcare</Text>
                <Text style={styles.spanLabelRed}>Increasing Military Forces for National Security</Text>
            </View>
        </View>

        <View style={{marginTop:35}}>
          <Text style={styles.profileSectionHeader}>My Political Targets</Text>
          <Text style={styles.sectionText}>Mention the target / goal for which you are working for.</Text>
         
          <View style={styles.mTop10}>

          <View style={{flex:3,flexDirection:'row'}}>
            <View style={{flex:1,flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-end',borderRightWidth:1,borderRightColor:'#ccc',paddingTop:15,paddingBottom:15}}>
                <Text style={{textAlign:'right',fontWeight:'bold',paddingRight:10,}}>2022</Text>
                <Text style={{textAlign:'right',fontWeight:'bold',color:'#ccc'}}>-</Text>
            </View>
            <View style={{flex:2,paddingLeft:10,paddingTop:15,paddingBottom:15}}>
                <Text>I want to bring Electricity to my Village as It doesn't contain electricity since 1947.</Text>
            </View>
          </View>
          <View style={{flex:3,flexDirection:'row'}}>
            <View style={{flex:1,flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-end',borderRightWidth:1,borderRightColor:'#ccc',paddingTop:15,paddingBottom:15}}>
                <Text style={{textAlign:'right',fontWeight:'bold',paddingRight:10,}}>2022</Text>
                <Text style={{textAlign:'right',fontWeight:'bold',color:'#ccc'}}>-</Text>
            </View>
            <View style={{flex:2,paddingLeft:10,paddingTop:15,paddingBottom:15}}>
                <Text>I want to install a solar power plant at My Village.</Text>
            </View>

          </View>

          </View>

        </View>

        {/*<View style={{marginTop:15,marginLeft:-15}}>
        <AdMobBanner
            bannerSize="smartBannerPortrait"
            adUnitID="ca-app-pub-3940256099942544/6300978111" 
            servePersonalizedAds/>
        </View> */}

        <View style={{marginTop:35}}>
          <Text style={styles.profileSectionHeader}>Public Views on Candidate</Text>
        </View>

    </View>
    </ScrollView>);
}

const styles = StyleSheet.create({
    mTop10:{marginTop:10}, 
    profileSectionHeader:{fontWeight:'bold',fontSize:16,paddingBottom:10,borderBottomWidth:1,borderBottomColor:'#ccc'},
    sectionText:{paddingTop:10,lineHeight:22,color:'#777'},
    rLDetailsScrollView: {width:Dimensions.get('screen').width,height:Dimensions.get('screen').height, paddingBottom:100},
    rLDetailsView: {flex:16,margin:15},
    rLDetailsTopSectionView: {flex:4,flexDirection:'row'},
    rLDetailsBackButtonView: {flex:0.5},
    rLDetailsBackButton: {color:COLORS.DARK_PARROTGREEN,marginTop:15},
    rLDetailsBasicInfoView:{flex:3.5},
    rLDetailsGeneralInfoView:{flexDirection:'row'},
    rLDetailsProfilePicView:{flex:0.75},
    rLDetailsTitleView:{flex:2.75,marginLeft:8 },
    rLDetailsTitle:{fontSize:16,fontWeight:'bold'},

    spanLabelRed:{ marginTop:5,marginRight:10,fontWeight:'bold',alignSelf: 'flex-start',borderRadius:4, paddingLeft:8,paddingRight:8,paddingTop:5,paddingBottom:5,backgroundColor:'#b50541', color:'#fff',fontSize:12,lineHeight:14 },
    spanLabelGreen:{ marginTop:5,marginRight:10,fontWeight:'bold',alignSelf: 'flex-start',borderRadius:4, paddingLeft:8,paddingRight:8,paddingTop:5,paddingBottom:5,backgroundColor:'green', color:'#fff',fontSize:12,lineHeight:14 },
});