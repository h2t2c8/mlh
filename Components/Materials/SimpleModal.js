import React,{ useState } from 'react';
import { Dimensions, Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { COLORS } from './../Utils/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Progress from 'react-native-progress';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SimpleModal(props) {
 const [modalVisible, setModalVisible] = useState(true);
 return (<View style={styles.centeredView}>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{borderBottomWidth:1,borderColor:'#555',marginTop:10,paddingBottom:15,flex:2,flexDirection:'row', justifyContent: "center", alignItems: "center", }}>
                <View style={{flex:1}}>
                    <Text style={styles.modalText}>Hello World!</Text>
                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
                    <FontAwesome name="close" size={16} style={{color:'#555'}} /> 
                </View>
            </View>
              {props.data!==undefined && props.data.map((info)=>{ return info;})}
            {/**** */}
            <View style={{flex:2,flexDirection:'row',marginTop:15,borderWidth:1,borderColor:'#ccc',borderRadius:8,backgroundColor:'#fff'}}>
            <View style={{flex:1,borderRightWidth:1,borderRightColor:'#ccc'}}>
                <Text style={{marginTop:15,paddingLeft:15,fontWeight:'bold',fontSize:14,paddingBottom:10,color:'#000'}}>Supporting Votes</Text>
                <View style={{flexDirection:'row',marginBottom:20,justifyContent:'center'}}>
                    <View style={{paddingTop:8}}>
                        <Progress.Bar color='green' width={70} borderColor='green' progress={0.75} />
                    </View>
                    <View style={{paddingLeft:10}}>
                        <Text style={{fontWeight:'bold',color:'green'}}>75% Votes</Text>
                    </View>
                </View>
                <View style={{borderTopWidth:1,borderTopColor:'#ccc'}}>
                    <View style={{padding:10}}>
                        <Text style={{paddingLeft:5,color:'#000',fontSize:13,fontWeight:'bold'}}>Supporting People</Text>
                        <Text style={{textAlign:'right',marginTop:5,color:'green',fontSize:16,fontWeight:'bold',color:'green'}}>1000</Text>
                    </View>
                </View>
            </View>
            <View style={{flex:1}}>
                <Text style={{marginTop:15,paddingLeft:15,fontWeight:'bold',fontSize:14,paddingBottom:10,color:'#000'}}>Opposing Votes</Text>
                <View style={{flexDirection:'row',marginBottom:20,justifyContent:'center'}}>
                    <View style={{paddingTop:8}}>
                        <Progress.Bar color='red' width={70} borderColor='red' progress={0.75} />
                    </View>
                    <View style={{paddingLeft:10}}>
                        <Text style={{fontWeight:'bold',color:'red'}}>75% Votes</Text>
                    </View>
                </View>
                <View style={{borderTopWidth:1,borderTopColor:'#ccc'}}>
                    <View style={{padding:10}}>
                        <Text style={{paddingLeft:5,color:'#000',fontSize:13,fontWeight:'bold'}}>Opposing People</Text>
                        <Text style={{textAlign:'right',marginTop:5,color:'#777',fontSize:16,fontWeight:'bold',color:'green'}}>1000</Text>
                    </View>
                </View>
            </View>
        </View>
            {/*** */}
          </View>
        </View>
    </Modal>
    </View>);
}

const styles = StyleSheet.create({
 centeredView: { flex: 1, justifyContent: "center", alignItems: "center", marginTop: 22 },
 modalView: { width:windowWidth-30,margin: 20, backgroundColor: "white", borderRadius: 8,
    borderWidth:1,borderColor:'#555', padding: 15, alignItems: "center",
    shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4,
    elevation: 5 },
 modalText: { paddingBottom: 10,fontWeight:'bold',color:'#555' }
});