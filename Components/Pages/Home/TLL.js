import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as Progress from 'react-native-progress';
import { COLORS } from './../../Utils/Colors';

export default function TLL(props) {
 const [data, setData] = useState([]);
 useEffect(() => {
    (async () => { 
        setData([{   profilePic:'https://c.ndtvimg.com/2020-03/6qjpm0h8_narendra-modi-address-pti_625x300_19_March_20.jpg',
        userName:'Narendra Modi', 
        issuesInvolvement: { participated: 4, resolved: 3, total: 10 },
        voteBank: { supportedVotes: 70, opposedVotes: 30 }
    },
    {   profilePic:'https://static.india.com/wp-content/uploads/2017/06/amit.jpg',
        userName:'Amith Shah', 
        issuesInvolvement: { participated: 4, resolved: 3, total: 10 },
        voteBank: { supportedVotes: 60, opposedVotes: 40 }
    },
    {   profilePic:'https://www.customercarephonenumber.in/wp-content/uploads/2013/04/Rahul-Gandhi-Photo.jpg',
        userName:'Rahul Gandhi', 
        issuesInvolvement: { participated: 4, resolved: 3, total: 10 },
        voteBank: { supportedVotes: 59, opposedVotes: 41 }
    },
    {   profilePic:'https://static.toiimg.com/thumb/msid-84732623,imgsize-477263,width-400,resizemode-4/84732623.jpg',
        userName:'Mayawati', 
        issuesInvolvement: { participated: 4, resolved: 3, total: 10 },
        voteBank: { supportedVotes: 59, opposedVotes: 41 }
    },
    {   profilePic:'https://starsunfolded.com/wp-content/uploads/2016/07/Akhilesh-Yadav.jpg',
        userName:'Akhilesh Yadav', 
        issuesInvolvement: { participated: 4, resolved: 3, total: 10 },
        voteBank: { supportedVotes: 59, opposedVotes: 41 }
    },
    {   profilePic:'https://upload.wikimedia.org/wikipedia/commons/8/86/Priyanka_Gandhi_Vadra_%286%29.jpg',
        userName:'Priyanka Gandhi', 
        issuesInvolvement: { participated: 4, resolved: 3, total: 10 },
        voteBank: { supportedVotes: 59, opposedVotes: 41 }
    },
    {   profilePic:'https://www.oneindia.com/img/2017/10/mamata-banerjee-27-1509103757.jpg',
        userName:'Mamata Banerjee', 
        issuesInvolvement: { participated: 4, resolved: 3, total: 10 },
        voteBank: { supportedVotes: 59, opposedVotes: 41 }
    },
    {   profilePic:'https://www.theindianwire.com/wp-content/uploads/2019/09/asaduddin-owaisi_2018015135.jpg',
        userName:'Asaduddin Owaisi', 
        issuesInvolvement: { participated: 4, resolved: 3, total: 10 },
        voteBank: { supportedVotes: 59, opposedVotes: 41 }
    },
    {   profilePic:'https://images.outlookindia.com/public/uploads/articles/2019/10/22/P_Chidambaram_630_630.png',
        userName:'Palaniappan Chidambaram', 
        issuesInvolvement: { participated: 4, resolved: 3, total: 10 },
        voteBank: { supportedVotes: 59, opposedVotes: 41 }
    },
    {   profilePic:'https://indianewengland.com/wp-content/uploads/2019/04/N.-Chandrababu-Naidu-larger.jpg',
        userName:'Nara Chandrababu Naidu', 
        issuesInvolvement: { participated: 4, resolved: 3, total: 10 },
        voteBank: { supportedVotes: 59, opposedVotes: 41 }
    }]);
 })(); }, []);
 const TitleBadge = () => <Text style={styles.trendSectionBadge}>Trending Local Leaders</Text>;
 const TitleHeader = () => (<View style={styles.trendSectionHeader}>
                                <Text style={styles.trendSectionHeading}>
                                    Top 10 Rising leaders / Political Party Volunteers
                                </Text>
                            </View>);
 const LLInfo = (props) =>{
    let index = props.index+1;
    let profilePic = props.data.profilePic;
    let userName = props.data.userName;
    let issuesInvolvement = props.data.issuesInvolvement;
    let voteBank = props.data.voteBank;
    return (<View style={styles.localLeaderView}>
        <View style={styles.localLeaderIndexView}>
            <Text style={styles.localLeaderIndex}>{index}.</Text>
        </View>
        <View style={styles.localLeaderInfoMainView}>
        <View style={styles.localLeaderInfoSubMainView}>
        <View style={styles.localLeaderIconView}>
            <Avatar.Image source={{uri:profilePic}} size={60} />
        </View>
        <View style={styles.localLeaderInfoView}>
            <Text style={styles.localLeaderInfoTitle}>{userName}</Text>
            <View style={styles.localLeaderDetailsView}>
                <View style={styles.localLeaderDetails1View}>
                    <Text style={styles.localLeaderDetails1Text}>Public Issues Participated</Text>
                </View>
                <View style={styles.localLeaderDetails2View}>
                    <Text style={styles.localLeaderDetails2Text}>-</Text>
                </View>
                <View style={styles.localLeaderDetails3View}>
                    <Text style={styles.localLeaderDetails3Text1}>{issuesInvolvement.participated} </Text>
                    <Text style={styles.localLeaderDetails3Text2}>/ {issuesInvolvement.total}</Text>
                </View>
            </View>
            <View style={styles.localLeaderDetailsView}>
                <View style={styles.localLeaderDetails1View}>
                    <Text style={styles.localLeaderDetails1Text}>Public Issues Resolved</Text>
                </View>
                <View style={styles.localLeaderDetails2View}>
                    <Text style={styles.localLeaderDetails2Text}>-</Text>
                </View>
                <View style={styles.localLeaderDetails3View}>
                    <Text style={styles.localLeaderDetails3Text1}>{issuesInvolvement.resolved} </Text>
                    <Text style={styles.localLeaderDetails3Text2}>/ {issuesInvolvement.total}</Text>
                </View>
            </View>
        </View>
        </View>
        <View style={styles.ballotContentView}>
            <View style={styles.ballotSupportView}>
                <Text style={styles.ballotSupportOpposeText}>Supported Votes</Text>
                <View style={styles.ballotSupportOpposeProgressView}>
                    <View style={styles.ballotSupportOpposeProgressBarView}>
                        <Progress.Bar color='green' width={90} borderColor='green' progress={voteBank.supportedVotes/100} />
                    </View>
                    <View style={styles.ballotSupportOpposeProgressTextView}>
                        <Text style={styles.ballotSupportProgressText}>{voteBank.supportedVotes}%</Text>
                    </View>
                </View>
            </View>
            <View style={styles.ballotOpposedView}>
                <Text style={styles.ballotSupportOpposeText}>Opposed Votes</Text>
                <View style={styles.ballotSupportOpposeProgressView}>
                    <View style={styles.ballotSupportOpposeProgressBarView}>
                        <Progress.Bar color='red' width={90} borderColor='red' progress={voteBank.opposedVotes/100} />
                    </View>
                    <View style={styles.ballotSupportOpposeProgressTextView}>
                        <Text style={styles.ballotOpposeProgressText}>{voteBank.opposedVotes}%</Text>
                    </View>
                </View>
            </View>
        </View>
        <View style={styles.detailBtnView}>
            <View style={styles.detailBtnSubView}>
                <Text style={styles.detailBtnText}>VIEW DETAILS</Text>
                <FontAwesome5 name="arrow-right" style={styles.detailBtnIcon} size={16} />
            </View>
        </View>
        </View>
    </View>);
 }
  
    return (data.length>0 ?<View style={styles.localLeaderMainView}>
        <View style={{margin:10}}>
            <TitleBadge/>
            <TitleHeader/>
            <View style={{marginBottom:15}}>
            {data.map((info,index)=>{
                console.log(info);
                return <LLInfo key={index} index={index} data={info}/>
            })}
            <View style={styles.allDetailBtnView}>
                <View style={styles.allDetailBtnSubView}>
                    <Text style={styles.allDetailBtnText}>VIEW COMPLETE INFORMATION</Text>
                    <FontAwesome5 name="arrow-right" style={styles.allDetailBtnIcon} size={16} />
                </View>
            </View>
            </View>
        </View>
    </View>:<View><Text>Loading ...</Text></View>);
}

const styles = StyleSheet.create({ 
    localLeaderMainView:{width:'100%',borderBottomWidth:1,borderBottomColor:'#ccc',backgroundColor:'#f9f9f7'},
    trendSectionBadge:{borderRadius:8,paddingTop:5,paddingBottom:5, paddingLeft:8,paddingRight:8, letterSpacing:0.75,fontWeight:'bold',fontSize:11,alignSelf: "flex-start",borderWidth:1,borderColor:'#c37604',color:'#c37604'},
    trendSectionHeader:{alignItems:'center',justifyContent:'center',marginTop:10},
    trendSectionHeading:{marginTop:8,fontWeight:'bold',fontSize:15},
    localLeaderView:{flex:4,flexDirection:'row',marginTop:25},
    localLeaderIndexView:{flex:0.5,alignItems:'flex-end'},
    localLeaderIndex:{marginTop:5,fontSize:16,fontWeight:'bold'},
    localLeaderInfoMainView:{flex:3.5},
    localLeaderInfoSubMainView:{flexDirection:'row',marginBottom:10},
    localLeaderIconView:{flex:0.8,alignItems:'center'},
    localLeaderInfoView:{flex:2.7,alignItems:'flex-start'},
    localLeaderInfoTitle:{fontSize:15,fontWeight:'bold',marginBottom:5},
    localLeaderDetailsView:{flex:1,flexDirection:'row'},
    localLeaderDetails1View:{flex:0.65},
    localLeaderDetails1Text:{fontSize:12,fontWeight:'bold',color:'#777'},
    localLeaderDetails2View:{flex:0.1,alignItems:'center'},
    localLeaderDetails2Text:{fontSize:12,fontWeight:'bold'},
    localLeaderDetails3View:{flex:0.25,flexDirection:'row'},
    localLeaderDetails3Text1:{fontSize:14,color:'green',fontWeight:'bold'},
    localLeaderDetails3Text2:{fontSize:14,color:'#777',fontWeight:'bold'},
    ballotContentView:{flexDirection:'row'},
    ballotSupportView:{flex:1.75,padding:10,borderRightWidth:1,borderColor:'#ccc',alignItems:'flex-start',justifyContent:'center'},
    ballotOpposedView:{flex:1.75,padding:10,alignItems:'flex-start',justifyContent:'center'},
    ballotSupportOpposeText:{paddingLeft:8,fontSize:14,fontWeight:'bold',alignItems:'center'},
    ballotSupportOpposeProgressView:{flex:1.75,flexDirection:'row',marginTop:8},
    ballotSupportOpposeProgressBarView:{flex:1.25,marginTop:10,paddingLeft:10},
    ballotSupportOpposeProgressTextView:{flex:0.5},
    ballotSupportProgressText:{fontSize:16,fontWeight:'bold',color:'green'},
    ballotOpposeProgressText:{fontSize:16,fontWeight:'bold',color:'red'},
    detailBtnView:{alignItems:'flex-end',paddingRight:10,marginTop:8},
    detailBtnSubView:{flexDirection:'row',padding:5,borderWidth:1,borderColor:'blue',borderRadius:8},
    detailBtnText:{fontWeight:'bold',color:'blue'},
    detailBtnIcon:{marginTop:3,paddingLeft:10,color:'blue'},
    allDetailBtnView:{alignItems:'center',paddingRight:10,marginTop:15},
    allDetailBtnSubView:{flexDirection:'row',padding:5,borderWidth:1,borderColor:COLORS.DARK_VOILET,borderRadius:8},
    allDetailBtnText:{fontWeight:'bold',color:COLORS.DARK_VOILET},
    allDetailBtnIcon:{marginTop:3,paddingLeft:10,color:COLORS.DARK_VOILET},
});