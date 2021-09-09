import React, { useState, useEffect  } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { COLORS } from './../../Utils/Colors';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

export default function PI() {
    const [supportTopicData, setSupportTopicData] = useState([]);
    const [opposeTopicData, setOpposeTopicData] = useState([]);
    const navigation = useNavigation();
    useEffect(() => {
        (async () => { 
            setSupportTopicData([{topicTitle:"Increasing Military Forces for National Security",
                            totalPeopleParticipated:2000, 
                            debatesPosted:0, 
                            actions: { resolved: 0, total: 0 },
                            voteBank: { supportedVotes: 59, opposedVotes: 41 }},
                            {topicTitle:"Protection of Unborn Lives",
                            totalPeopleParticipated:2000, 
                            debatesPosted:0, 
                            actions: { resolved: 0, total: 0 },
                            voteBank: { supportedVotes: 59, opposedVotes: 41 }},
                            {topicTitle:"Immigration Reform",
                            totalPeopleParticipated:2000, 
                            debatesPosted:0, 
                            actions: { resolved: 0, total: 0 },
                            voteBank: { supportedVotes: 59, opposedVotes: 41 }},
                            {topicTitle:"Voting Rights",
                            totalPeopleParticipated:2000, 
                            debatesPosted:0, 
                            actions: { resolved: 0, total: 0 },
                            voteBank: { supportedVotes: 59, opposedVotes: 41 }},
                            {topicTitle:"Startups and Business Innovations",
                            totalPeopleParticipated:2000, 
                            debatesPosted:0, 
                            actions: { resolved: 0, total: 0 },
                            voteBank: { supportedVotes: 59, opposedVotes: 41 }},
                            {topicTitle:"Quality Education",
                            totalPeopleParticipated:2000, 
                            debatesPosted:0, 
                            actions: { resolved: 0, total: 0 },
                            voteBank: { supportedVotes: 59, opposedVotes: 41 }},
                            {topicTitle:"Regulation to Educational Institutions on Fee Structure",
                            totalPeopleParticipated:2000, 
                            debatesPosted:0, 
                            actions: { resolved: 0, total: 0 },
                            voteBank: { supportedVotes: 59, opposedVotes: 41 }}]);
            setOpposeTopicData([{topicTitle:"Lower Taxes",
                            totalPeopleParticipated:2000, 
                            debatesPosted:0, 
                            actions: { resolved: 0, total: 0 },
                            voteBank: { supportedVotes: 59, opposedVotes: 41 }},
                            {topicTitle:"Privatization in Healthcare",
                            totalPeopleParticipated:2000, 
                            debatesPosted:0, 
                            actions: { resolved: 0, total: 0 },
                            voteBank: { supportedVotes: 59, opposedVotes: 41 }},
                            {topicTitle:"Corruption in Government Organizations",
                            totalPeopleParticipated:2000, 
                            debatesPosted:0, 
                            actions: { resolved: 0, total: 0 },
                            voteBank: { supportedVotes: 59, opposedVotes: 41 }},
                            {topicTitle:"Increase in Petrol, Diesel and Oil Prices",
                            totalPeopleParticipated:2000, 
                            debatesPosted:0, 
                            actions: { resolved: 0, total: 0 },
                            voteBank: { supportedVotes: 59, opposedVotes: 41 }},
                            {topicTitle:"Election Fraud",
                            totalPeopleParticipated:2000, 
                            debatesPosted:0, 
                            actions: { resolved: 0, total: 0 },
                            voteBank: { supportedVotes: 59, opposedVotes: 41 }},
                            {topicTitle:"Government Unsupport to Farmers",
                            totalPeopleParticipated:2000, 
                            debatesPosted:0, 
                            actions: { resolved: 0, total: 0 },
                            voteBank: { supportedVotes: 59, opposedVotes: 41 }}]);
    })(); }, []);
    const TitleBadge = () => <Text style={styles.trendSectionBadge}>Public Topics</Text>;
    const TitleHeader = () => (<View style={styles.trendSectionHeader}>
                                   <Text style={styles.trendSectionHeading}>
                                       Top 10 Supporting / Opposing Public Topics
                                   </Text>
                               </View>);
    const BallotView = (props) => {
        let voteBank = props.voteBank;
        return (<View style={styles.ballotContentView}>
            <View style={styles.ballotSupportView}>
                <Text style={styles.ballotSupportText}>Supported Votes</Text>
                <View style={styles.ballotSupportOpposeProgressView}>
                    <View style={styles.ballotSupportProgressBarView}>
                        <Progress.Bar color='green' width={90} borderColor='green' progress={voteBank.supportedVotes/100} />
                    </View>
                    <View style={styles.ballotSupportOpposeProgressTextView}>
                        <Text style={styles.ballotSupportProgressText}>{voteBank.supportedVotes}%</Text>
                    </View>
                </View>
            </View>
            <View style={styles.ballotOpposedView}>
                <Text style={styles.ballotOpposeText}>Opposed Votes</Text>
                <View style={styles.ballotSupportOpposeProgressView}>
                    <View style={styles.ballotOpposeProgressBarView}>
                        <Progress.Bar color='red' width={90} borderColor='red' progress={voteBank.opposedVotes/100} />
                    </View>
                    <View style={styles.ballotSupportOpposeProgressTextView}>
                        <Text style={styles.ballotOpposeProgressText}>{voteBank.opposedVotes}%</Text>
                    </View>
                </View>
            </View>
        </View>);
    }
    const TopicTitle = (props) => (<View style={{alignItems:'center',marginTop:15}}>
                                    <Text style={{fontSize:14,fontWeight:'bold',color:COLORS.DARK_VOILET}}>{props.title}</Text>
                                   </View>);
    const SupportTopic = (props) => {
        let index = props.index+1;
        let topicTitle = props.data.topicTitle;
        let totalPeopleParticipated = props.data.totalPeopleParticipated;
        let debatesPosted = props.data.debatesPosted;
        let actions = props.data.actions;
        let voteBank = props.data.voteBank;
        return (<View style={styles.topicView}>
        <View style={styles.topicIndexView}>
            <Text style={styles.topicIndex}>{index}.</Text>
        </View>
        <View style={styles.topicInfoView}>
            <View style={styles.topicInfoTitleView}>
                <Text style={styles.topicInfoTitleText}>{topicTitle}</Text>
            </View>

            <View style={styles.topicDataInfoView}>
                <View style={styles.topicDataInfoLabelView}>
                    <Text style={styles.topicDataInfoLabel}>Total People Participated</Text>
                </View>
                <View style={styles.topicDataInfoSeparatorView}>
                    <Text style={styles.topicDataInfoSeparator}>-</Text>
                </View>
                <View style={styles.topicDataInfoValueView}>
                     <Text style={styles.supportTopicDataInfoValue}>{totalPeopleParticipated} People</Text>
                </View>
            </View>

            <View style={styles.topicDataInfoView}>
                <View style={styles.topicDataInfoLabelView}>
                    <Text style={styles.topicDataInfoLabel}>Debates Posted</Text>
                </View>
                <View style={styles.topicDataInfoSeparatorView}>
                    <Text style={styles.topicDataInfoSeparator}>-</Text>
                </View>
                <View style={styles.topicDataInfoValueView}>
                     <Text style={styles.supportTopicDataInfoValue}>{debatesPosted}</Text>
                </View>
            </View>
            
            <View style={styles.topicDataInfoView}>
                <View style={styles.topicDataInfoLabelView}>
                    <Text style={styles.topicDataInfoLabel}>Actions on Issues (Resolved)</Text>
                </View>
                <View style={styles.topicDataInfoSeparatorView}>
                    <Text style={styles.topicDataInfoSeparator}>-</Text>
                </View>
                <View style={styles.topicDataInfoValueView}>
                     <Text style={styles.supportTopicDataInfoValue}>{actions.resolved} </Text>
                     <Text style={styles.topicDataInfoValue}>/ {actions.total}</Text>
                </View>
            </View>

            <BallotView voteBank={voteBank} />
            <TouchableOpacity onPress={() => navigation.push('PTDetails',{ data:props.data })}>
            <View style={styles.detailBtnView}>
                <View style={styles.detailBtnSubView}>
                    <Text style={styles.detailBtnText}>VIEW DETAILS</Text>
                    <FontAwesome5 name="arrow-right" style={styles.detailBtnIcon} size={16} />
                </View>
            </View>
            </TouchableOpacity>
        </View>
    </View>);
    };
    const OpposeTopic = (props) => {
        let index = props.index+1;
        let topicTitle = props.data.topicTitle;
        let totalPeopleParticipated = props.data.totalPeopleParticipated;
        let debatesPosted = props.data.debatesPosted;
        let actions = props.data.actions;
        let voteBank = props.data.voteBank;
        return (<View style={styles.topicView}>
        <View style={styles.topicIndexView}>
            <Text style={styles.topicIndex}>{index}.</Text>
        </View>
        <View style={styles.topicInfoView}>
            <View style={styles.topicInfoTitleView}>
                <Text style={styles.topicInfoTitleText}>{topicTitle}</Text>
            </View>

            <View style={styles.topicDataInfoView}>
                <View style={styles.topicDataInfoLabelView}>
                    <Text style={styles.topicDataInfoLabel}>Total People Participated</Text>
                </View>
                <View style={styles.topicDataInfoSeparatorView}>
                    <Text style={styles.topicDataInfoSeparator}>-</Text>
                </View>
                <View style={styles.topicDataInfoValueView}>
                     <Text style={styles.opposeTopicDataInfoValue}>{totalPeopleParticipated} People</Text>
                </View>
            </View>

            <View style={styles.topicDataInfoView}>
                <View style={styles.topicDataInfoLabelView}>
                    <Text style={styles.topicDataInfoLabel}>Debates Posted</Text>
                </View>
                <View style={styles.topicDataInfoSeparatorView}>
                    <Text style={styles.topicDataInfoSeparator}>-</Text>
                </View>
                <View style={styles.topicDataInfoValueView}>
                     <Text style={styles.opposeTopicDataInfoValue}>{debatesPosted}</Text>
                </View>
            </View>
            
            <View style={styles.topicDataInfoView}>
                <View style={styles.topicDataInfoLabelView}>
                    <Text style={styles.topicDataInfoLabel}>Actions on Issues (Resolved)</Text>
                </View>
                <View style={styles.topicDataInfoSeparatorView}>
                    <Text style={styles.topicDataInfoSeparator}>-</Text>
                </View>
                <View style={styles.topicDataInfoValueView}>
                     <Text style={styles.opposeTopicDataInfoValue}>{actions.resolved} </Text>
                     <Text style={styles.topicDataInfoValue}>/ {actions.total}</Text>
                </View>
            </View>

            <BallotView voteBank={voteBank} />

            <TouchableOpacity onPress={() => navigation.push('PTDetails',{data:props.data})}>
            <View style={styles.detailBtnView}>
                <View style={styles.detailBtnSubView}>
                    <Text style={styles.detailBtnText}>VIEW DETAILS</Text>
                    <FontAwesome5 name="arrow-right" style={styles.detailBtnIcon} size={16} />
                </View>
            </View>
            </TouchableOpacity>
        </View>
    </View>);
    };
    
    return ((supportTopicData.length>0 && opposeTopicData.length>0)?<View style={styles.publicIssueMainView}>
        <View style={{margin:10}}>
            <TitleBadge/>
            <TitleHeader/>
            <TopicTitle title="SUPPORTING PUBLIC TOPICS"/>
            {supportTopicData.map((info,index)=>{
               return <SupportTopic key={index} index={index} data={info} />
            })}
            <TopicTitle title="OPPOSING PUBLIC TOPICS"/>
            {opposeTopicData.map((info,index)=>{
               return <OpposeTopic key={index} index={index} data={info} />
            })}
            <View style={styles.allDetailBtnView}>
                <View style={styles.allDetailBtnSubView}>
                    <Text style={styles.allDetailBtnText}>VIEW COMPLETE INFORMATION</Text>
                    <FontAwesome5 name="arrow-right" style={styles.allDetailBtnIcon} size={16} />
                </View>
            </View>
        </View>
    </View>:<View><Text>Loading ...</Text></View>);
}

const styles = StyleSheet.create({ 
 publicIssueMainView:{width:'100%',borderBottomWidth:1,borderBottomColor:'#ccc'},
 trendSectionBadge:{borderRadius:8,paddingTop:5,paddingBottom:5, paddingLeft:8,paddingRight:8, letterSpacing:0.75,fontWeight:'bold',fontSize:11,alignSelf: "flex-start",borderWidth:1,borderColor:'#c37604',color:'#c37604'},
 trendSectionHeader:{alignItems:'center',justifyContent:'center',marginTop:10},
 trendSectionHeading:{marginTop:8,fontWeight:'bold',fontSize:15},

 topicView:{flex:4,flexDirection:'row',marginTop:15},
 topicIndexView:{alignItems:'flex-end',flex:0.3},
 topicIndex:{fontSize:16,fontWeight:'bold'},
 topicInfoView:{flex:2.7,paddingLeft:10},
 topicInfoTitleView:{marginBottom:5},
 topicInfoTitleText:{fontSize:15,flexWrap: 'wrap',flexShrink: 1,fontWeight:'bold'},
 topicDataInfoView:{flex:2,flexDirection:'row'},
 topicDataInfoLabelView:{flex:1.2},
 topicDataInfoLabel:{fontSize:14,fontWeight:'bold',color:'#777'},
 topicDataInfoSeparatorView:{flex:0.09},
 topicDataInfoSeparator:{fontSize:14,fontWeight:'bold',color:'#777'},
 topicDataInfoValueView:{flex:0.61,flexDirection:'row'},
 supportTopicDataInfoValue:{fontSize:14,fontWeight:'bold',color:'green'},
 opposeTopicDataInfoValue:{fontSize:14,fontWeight:'bold',color:'red'},
 topicDataInfoValue:{fontSize:14,fontWeight:'bold',color:'#777'},

 ballotContentView:{flexDirection:'row',marginTop:8},
 ballotSupportView:{flex:1.75,paddingTop:10,paddingRight:10,borderRightWidth:1,borderColor:'#ccc',alignItems:'flex-start',justifyContent:'center'},
 ballotOpposedView:{flex:1.75,padding:10,alignItems:'flex-start',justifyContent:'center'},
 ballotSupportText:{fontSize:14,fontWeight:'bold',alignItems:'center'},
 ballotOpposeText:{paddingLeft:8,fontSize:14,fontWeight:'bold',alignItems:'center'},
 ballotSupportOpposeProgressView:{flex:1.75,flexDirection:'row',marginTop:8},
 ballotSupportProgressBarView:{flex:1.25,marginTop:10},
 ballotOpposeProgressBarView:{flex:1.25,marginTop:10,paddingLeft:10},
 ballotSupportOpposeProgressTextView:{flex:0.5},
 ballotSupportProgressText:{fontSize:16,fontWeight:'bold',color:'green'},
 ballotOpposeProgressText:{fontSize:16,fontWeight:'bold',color:'red'},

 detailBtnView:{alignItems:'flex-end',paddingRight:10,marginTop:8,marginBottom:8},
 detailBtnSubView:{flexDirection:'row',padding:5,borderWidth:1,borderColor:'blue',borderRadius:8},
 detailBtnText:{fontWeight:'bold',color:'blue'},
 detailBtnIcon:{marginTop:3,paddingLeft:10,color:'blue'},
 allDetailBtnView:{alignItems:'center',paddingRight:10,marginTop:15},
 allDetailBtnSubView:{flexDirection:'row',padding:5,borderWidth:1,borderColor:COLORS.DARK_VOILET,borderRadius:8},
 allDetailBtnText:{fontWeight:'bold',color:COLORS.DARK_VOILET},
 allDetailBtnIcon:{marginTop:3,paddingLeft:10,color:COLORS.DARK_VOILET},
});