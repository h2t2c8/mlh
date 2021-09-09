import React,{ useState } from 'react';
import { Dimensions, Alert, Modal, StyleSheet, Text , View } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity} from 'react-native'
import { COLORS } from './../../../Utils/Colors';
import { useNavigation, useRoute  } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function TopicStatistics(props) {
 const [modalVisible, setModalVisible] = useState(true);
 const navigation = useNavigation();
 const route = useRoute();
 return (<View style={styles.centeredView}>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}>
          <View style={styles.centeredView}>
          <View style={styles.modalView}>
          
                <View style={styles.modalHeaderRow}>
                    <View style={styles.flex1}>
                      <Text style={styles.modalHeaderTitle}>Topic Statistics</Text>
                    </View>
                    
                    <View style={styles.modalCloseView}>
                        
                       <View  style={{marginTop:-15}} >
                       <FontAwesome name="close" size={16}
                            color={COLORS.DARK_VOILET} />
                        
                       </View>
                       
                    </View>
                </View>
               
                <View style={styles.modalRowData}>
                    <View style={styles.flex1}>
                        <Text style={styles.modalLabelKey}>Supporting Votes</Text>
                    </View>
                    <View style={styles.flex1}>
                        <Text style={styles.successValue}>1000</Text>
                    </View>
                </View>
                <View style={styles.modalRowData}>
                    <View style={styles.flex1}>
                        <Text style={styles.modalLabelKey}>Opposing Votes</Text>
                    </View>
                    <View style={styles.flex1}>
                        <Text style={styles.failedValue}>1000</Text>
                    </View>
                </View>
                <View style={styles.modalTotalView}>
                    <View style={styles.flex1}>
                        <Text style={styles.modalLabelKey}>Total Votes</Text>
                    </View>
                    <View style={styles.flex1}>
                        <Text style={styles.modalTotalValue}>1000</Text>
                    </View>
                </View>
                <View style={styles.modalRowData}>
                    <View style={styles.flex1}>
                        <Text style={styles.modalLabelKey}>NewsFeed Posted</Text>
                    </View>
                    <View style={styles.flex1}>
                        <Text style={styles.modalLabelValue}>0</Text>
                    </View>
                </View>
                <View style={styles.modalRowData}>
                    <View style={styles.flex1}>
                        <Text style={styles.modalLabelKey}>Debates</Text>
                    </View>
                    <View style={styles.flex1}>
                        <Text style={styles.modalLabelValue}>0</Text>
                    </View>
                </View>
                <View style={styles.modalRowData}>
                    <View style={styles.flex1}>
                        <Text style={styles.modalLabelKey}>Public Issues Created</Text>
                    </View>
                    <View style={styles.flex1}>
                        <Text style={styles.modalLabelValue}>0</Text>
                    </View>
                </View>
                <View style={styles.modalTotalView}>
                    <View style={{flex:1.4}}>
                        <Text style={styles.modalLabelKey}>Total People Participated</Text>
                    </View>
                    <View style={{flex:0.6}}>
                        <Text style={styles.modalTotalValue}>1000</Text>
                    </View>
                </View>
          </View>
          </View>
    </Modal>
    </View>);
}

const styles = StyleSheet.create({
 centeredView: { flex: 1, justifyContent: "center", alignItems: "center", marginTop: 22 },
 modalView: { width:windowWidth-40,margin: 20, backgroundColor: '#faf7fb', borderRadius: 8,
    borderWidth:1,borderColor:COLORS.DARK_VOILET, padding: 15, alignItems: "center",
    shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4,
    elevation: 5 },
modalHeaderTitle: { paddingBottom: 10,fontWeight:'bold',color:COLORS.DARK_VOILET },
 modalLabelKey: { fontWeight:'bold',color:'#555' },
 modalLabelValue:{ fontWeight:'bold',color:COLORS.DARK_VOILET,textAlign:'right' },
 modalTotalValue:{ fontWeight:'bold',color:'#555',textAlign:'right' },
 successKey: { fontWeight:'bold',color:'green'  },
 successValue: { fontWeight:'bold',color:'green',textAlign:'right' },
 failedKey: { fontWeight:'bold',color:'red'  },
 failedValue: { fontWeight:'bold',color:'red',textAlign:'right' },
 modalHeaderRow:{flex:1,flexDirection:'row', marginBottom:10, justifyContent: "center", alignItems: "center",borderBottomWidth:1,borderColor:COLORS.DARK_VOILET,marginTop:10,paddingBottom:15},
 flex1:{flex:1},
 modalCloseView:{flex:1,alignItems:'flex-end'},
 modalRowData:{paddingLeft:5,paddingRight:5,flex:1, flexDirection:'row',justifyContent: "center", alignItems: "center",marginTop:10,paddingBottom:15},
 modalTotalView:{marginTop:5,marginBottom:10,paddingLeft:5,paddingRight:5,backgroundColor:'#ebe2ef',paddingTop:12,paddingBottom:40,borderTopWidth:1,borderTopColor:'#555',borderBottomWidth:1,borderBottomColor:'#555',flex:1,flexDirection:'row',justifyContent: "center", alignItems: "center",paddingBottom:15},
});