import React, { useState } from 'react';
import { Alert, View, Text, Modal, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as Progress from 'react-native-progress';
import { COLORS } from './../../../Utils/Colors';
import TopicStatistics from './PTDetailsModal';

export default function PTDetails(){
    const route = useRoute();
    const [topicVote, setTopicVote] = useState("");
   // topicTitle
   // totalPeopleParticipated 
   // debatesPosted:0, 
   // actions: { resolved: 0, total: 0 },
   //  voteBank: { supportedVotes: 59, opposedVotes: 41 }
   const TopicVoteButtons = (props) =>{
    console.log("props.topicVote: "+props.topicVote);
    return (<View style={styles.btnGroup}>
        {(props.topicVote==='SUPPORT')?(<Text style={styles.btnGroupDefaultBtn1O}><FontAwesome5 name="check" size={14} />  I am Supporting this Topic</Text>)
        :(<TouchableOpacity onPress={()=>setTopicVote('SUPPORT')}><Text style={styles.btnGroupDefaultBtn1}>Support this Topic</Text></TouchableOpacity>)}
    {(props.topicVote==='OPPOSE')?(<Text style={styles.btnGroupDefaultBtn2O}><FontAwesome5 name="check" size={14} />  I am Opposing this Topic</Text>)
        :(<TouchableOpacity onPress={()=>setTopicVote('OPPOSE')}><Text style={styles.btnGroupDefaultBtn2}>Oppose this Topic</Text></TouchableOpacity>)}
</View>);
   };
    return (<View>
    <ScrollView style={styles.pTDetailsScrollView} keyboardShouldPersistTaps={'handled'}>
     <View style={styles.pTDetailsView}>
        <View>
            <Text style={styles.pTDetailsTitle}>{route.params.data.topicTitle}</Text>
            <Text style={{marginTop:5,marginBottom:5,fontSize:13,color:'#777'}}>Mentions the Description about the Topic</Text>
        </View>
        <View style={styles.pTDetailsCategoryView}>
            <View style={styles.pTDetailsCategoryBadgeView}>
                <Text style={styles.spanLabelBlackO}>Category / SubCategory</Text>
            </View>
            <View style={styles.pTDetailsTopicOverviewView}>
                <FontAwesome5 name="layer-group" size={16.5} style={styles.pTDetailsTopicOverviewIcon} />
            </View>
        </View>
        <TopicVoteButtons topicVote={topicVote} />
        
    </View>
    </ScrollView>
    <TopicStatistics/>
    </View>);
}

const styles = StyleSheet.create({
    pTDetailsScrollView: {backgroundColor:'#fff',width:Dimensions.get('screen').width,height:Dimensions.get('screen').height, paddingBottom:100},
    pTDetailsView:{flex:16,margin:15},
    pTDetailsTitle:{alignSelf:'center',lineHeight:24,textAlign:'center',fontSize:16,fontWeight:'bold'},
    row:{flexDirection:'row'},
    spanLabelBlueO:{ borderWidth:1,borderColor:'blue',marginTop:5,marginLeft:5,marginRight:5,fontWeight:'bold',alignSelf: 'flex-start',borderRadius:4, paddingLeft:8,paddingRight:8,paddingTop:5,paddingBottom:5,backgroundColor:'#fff', color:'blue',fontSize:12,lineHeight:14 },
    spanLabelBlackO:{ borderWidth:1,borderColor:'#000',marginTop:5,marginLeft:5,marginRight:5,fontWeight:'bold',alignSelf: 'flex-start',borderRadius:4, paddingLeft:8,paddingRight:8,paddingTop:5,paddingBottom:5,backgroundColor:'#fff', color:'#000',fontSize:12,lineHeight:14 },
    pTDetailsCategoryView:{flex:2,flexDirection:'row'},
    pTDetailsCategoryBadgeView:{flex:1.85,flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-end'},
    pTDetailsTopicOverviewView:{flex:0.15,marginTop:2, borderWidth:2,borderColor:'#777',backgroundColor:'#fff'},
    pTDetailsTopicOverviewIcon:{margin:5,color:'#777'},
    btnGroup:{justifyContent:'flex-end',flexDirection:'row',marginTop:10},
    btnGroupDefaultBtn1:{color:COLORS.DARK_VOILET,fontWeight:'bold',fontSize:12,borderTopLeftRadius:8,borderBottomLeftRadius:8,paddingTop:8,paddingBottom:8,paddingLeft:10,paddingRight:10,borderWidth:1,borderRightWidth:0,borderColor:COLORS.DARK_VOILET},
    btnGroupDefaultBtn1O:{color:'#fff',fontWeight:'bold',fontSize:12,borderTopLeftRadius:8,borderBottomLeftRadius:8,paddingTop:8,paddingBottom:8,paddingLeft:10,paddingRight:10,backgroundColor:COLORS.DARK_VOILET,borderWidth:1,borderRightWidth:0,borderColor:COLORS.DARK_VOILET},
    btnGroupDefaultBtn2:{color:COLORS.DARK_VOILET,fontWeight:'bold',fontSize:12,borderTopRightRadius:8,borderBottomRightRadius:8,paddingTop:8,paddingBottom:8,paddingLeft:10,paddingRight:10,borderWidth:1,borderColor:COLORS.DARK_VOILET},
    btnGroupDefaultBtn2O:{color:'#fff',fontWeight:'bold',fontSize:12,borderTopRightRadius:8,borderBottomRightRadius:8,paddingTop:8,paddingBottom:8,paddingLeft:10,paddingRight:10,backgroundColor:COLORS.DARK_VOILET,borderWidth:1,borderColor:COLORS.DARK_VOILET},
    
    TopicSummaryOverview1:{flex:4,marginTop:15,borderWidth:1,borderColor:'#ccc',borderTopLeftRadius:8,borderTopRightRadius:8,backgroundColor:'#fff'},
    TopicSummaryOverview2:{flex:4,borderTopWidth:0,borderWidth:1,borderColor:'#ccc',borderBottomLeftRadius:8,borderBottomRightRadius:8,backgroundColor:'#fff'},
    TopicSummaryInfoView1:{flex:1.8,borderRightWidth:1,borderColor:'#ccc'},
    TopicSummaryInfoView2:{flex:2.2},
    TopicSummaryInfoLabel1:{textAlign:'center',fontWeight:'bold',paddingTop:10,paddingLeft:10,color:'#777'},
    TopicSummaryInfoLabel2:{textAlign:'center',fontWeight:'bold',paddingTop:10,paddingRight:10,color:'#777'},
    TopicSummaryInfoLabel3:{textAlign:'center',fontWeight:'bold',paddingTop:10,paddingRight:10,color:'#777'},
    TopicSummaryInfoLabel4:{textAlign:'center',fontWeight:'bold',paddingTop:10,paddingLeft:10,color:'#777'},
    TopicSummaryInfoValue:{textAlign:'center',paddingTop:5,paddingBottom:10,color:'green',fontWeight:'bold',fontSize:16},
});