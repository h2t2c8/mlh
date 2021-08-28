import React, { useState, useEffect  } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { COLORS } from './../../Utils/Colors';
import { Avatar } from 'react-native-paper';
import * as Progress from 'react-native-progress';

export default function PPI(){
    const [data, setData] = useState([]);
    useEffect(() => {
        (async () => { 
        setData([{"icon":"https://www.kindpng.com/picc/m/247-2478665_bjp-logo-png-photo-bharatiya-janata-party-transparent.png",
                    "title":"Bharatiya Janata Party",
                    "ballotVotePercent":75,
                    "partyVolunteers":800 },
                {"icon":"https://yt3.ggpht.com/ytc/AKedOLSebvtwfOQM7wlIymvfcvN6gkhbYPfT0X8w77crGA=s900-c-k-c0x00ffffff-no-rj",
                 "title":"Indian National Congress",
                 "ballotVotePercent":35,
                 "partyVolunteers":938 },
                {"icon":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Elephant_Bahujan_Samaj_Party.svg/1200px-Elephant_Bahujan_Samaj_Party.svg.png",
                 "title":"Bahujan Samaj Party",
                 "ballotVotePercent":55,
                 "partyVolunteers":800},
                {"icon":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/CPI%28ML%29.svg/1200px-CPI%28ML%29.svg.png",
                 "title":"Communist Party of India",
                 "ballotVotePercent":65,
                 "partyVolunteers":800},
                 {"icon":"https://www.trspartyonline.org/wp-content/uploads/2018/10/trs-party-logo-medium.jpg",
                  "title":"Telangana Rashtra Samithi",
                  "ballotVotePercent":45,
                  "partyVolunteers":800}]);
        
    })(); }, []);
    const TitleBadge = () => <Text style={styles.trendSectionBadge}>Public Parties and their Impact</Text>;
    const TitleHeader = () => (<View style={styles.trendSectionHeader}>
                                   <Text style={styles.trendSectionHeading}>
                                       Top 10 Political Parties of Nadargul
                                   </Text>
                               </View>);
    const PPIInfo = (props) => {
        const index = props.index+1;
        const icon = props.data.icon;
        const title = props.data.title;
        const ballotVotePercent = props.data.ballotVotePercent;
        const partyVolunteers = props.data.partyVolunteers;
        return (<View>
            <View style={styles.PPIContentView}>
            <View style={styles.PPIIndexView}>
                <Text style={styles.PPIIndexText}>{index}.</Text>
            </View>
            <View style={styles.PPIIconView}>
                <Avatar.Image source={{uri:icon}} size={60} />
            </View>
            <View style={styles.PPITitleView}>
                <View><Text style={styles.PPITitle}>{title}</Text></View>
                <View style={styles.PPITitleDetailsView}>
                        <Text style={styles.PPITitleDetailsLabel}>Party Local Volunteers</Text>
                        <Text style={styles.PPITitleDetailsSeparator}>-</Text>
                        <Text style={styles.PPITitleDetailsValue}>{partyVolunteers} People</Text>
                </View>
                <View style={styles.PPITitleProgessView}>
                        <View style={styles.PPITitleProgessBarView}>
                            <Progress.Bar color='green' width={150} borderColor='green' progress={ballotVotePercent/100} />
                        </View>
                        <Text style={styles.PPITitleProgessBarText}>{ballotVotePercent}% Votes</Text>
                </View>
            </View>
        </View>
        <View style={styles.detailBtnView}>
            <View style={styles.detailBtnSubView}>
                <Text style={styles.detailBtnText}>VIEW DETAILS</Text>
                <FontAwesome5 name="arrow-right" style={styles.detailBtnIcon} size={16} />
            </View>
        </View>
        </View>);
    }
    const AllDetailsBtn = (props) => {
        return (<View style={styles.allDetailBtnView}>
            <View style={styles.allDetailBtnSubView}>
                <Text style={styles.allDetailBtnText}>VIEW COMPLETE INFORMATION</Text>
                <FontAwesome5 name="arrow-right" style={styles.allDetailBtnIcon} size={16} />
            </View>
        </View>);
    }
    
    return (data.length>0 ?<View style={styles.PPIView}>
        <TitleBadge />
        <TitleHeader />
        {data.length>0 && data.map((info,index)=>{ 
            return <PPIInfo key={index} index={index} data={info}/>
        })}
        <AllDetailsBtn />

    </View>:<View><Text>Loading ...</Text></View>);
}

const styles = StyleSheet.create({ 
 trendSectionBadge:{margin:15,borderRadius:8,paddingTop:5,paddingBottom:5, paddingLeft:8,paddingRight:8, letterSpacing:0.75,fontWeight:'bold',fontSize:11,alignSelf: "flex-start",borderWidth:1,borderColor:'#c37604',color:'#c37604'},
 trendSectionHeader:{alignItems:'center',justifyContent:'center'},
 trendSectionHeading:{fontWeight:'bold',fontSize:15},

 PPIView:{width:'100%',borderBottomWidth:1,borderBottomColor:'#ccc',backgroundColor:'#f9f9f7'},
 PPIContentView:{flex:4,flexDirection:'row',marginTop:15,marginBottom:10},
 PPIIndexView:{flex:0.5,alignItems:'flex-end'},
 PPIIndexText:{fontSize:16,fontWeight:'bold',paddingRight:10},
 PPIIconView:{flex:0.75},
 PPITitleView:{flex:2.75,paddingRight:10},
 PPITitle:{fontSize:16,fontWeight:'bold'},
 PPITitleDetailsView:{flex:2,flexDirection:'row',marginTop:8},
 PPITitleDetailsLabel:{flex:1,fontSize:12,fontWeight:'bold',color:'#777'},
 PPITitleDetailsSeparator:{flex:0.2,fontSize:12,fontWeight:'bold',color:'#777'},
 PPITitleDetailsValue:{flex:0.6,fontSize:12,fontWeight:'bold',color:'green'},
 PPITitleProgessView:{flex:2,flexDirection:'row',marginTop:8},
 PPITitleProgessBarView:{marginTop:6.5,flex:1.2,fontSize:12,fontWeight:'bold',color:'#777'},
 PPITitleProgessBarText:{flex:0.6,fontSize:14,fontWeight:'bold',color:'green'},

 detailBtnView:{alignItems:'flex-end',paddingRight:10,marginTop:8,marginBottom:8,marginRight:10},
 detailBtnSubView:{flexDirection:'row',padding:5,borderWidth:1,borderColor:'blue',borderRadius:8},
 detailBtnText:{fontWeight:'bold',color:'blue'},
 detailBtnIcon:{marginTop:3,paddingLeft:10,color:'blue'},
 allDetailBtnView:{alignItems:'center',paddingRight:10,marginTop:15,marginBottom:15},
 allDetailBtnSubView:{flexDirection:'row',padding:5,borderWidth:1,borderColor:COLORS.DARK_VOILET,borderRadius:8},
 allDetailBtnText:{fontWeight:'bold',color:COLORS.DARK_VOILET},
 allDetailBtnIcon:{marginTop:3,paddingLeft:10,color:COLORS.DARK_VOILET},
});