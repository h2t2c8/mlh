import React,{ useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { COLORS } from './../../Utils/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { SaveData, ReadData } from './../../Utils/Persist';

export default function Categories(){
 const [interestInfo, setInterestInfo] = useState([]);
 const navigation = useNavigation();


 let categories = [{icon:'agriculture',iconType:'MaterialIcons',label:'Agriculture'},
    {icon:'theater-masks',iconType:'FontAwesome5',label:'Arts & Culture'},
    {icon:'biotech',iconType:'MaterialIcons',label:'Bio-tech'},
    {icon:'add-shopping-cart',iconType:'MaterialIcons',label:'Commerce'},
    {icon:'hammer',iconType:'FontAwesome5',label:'Mining'},
    {icon:'hand-holding-water',iconType:'FontAwesome5',label:'Water & Sanitation'}];

 const DisplayCategory = (props) =>{
  const [displayColor,setDisplayColor] = useState(COLORS.MEDIUM_GRAY);
  return (
  <TouchableOpacity onPress={()=>{
    if(displayColor===COLORS.DARK_VOILET){
        setDisplayColor(COLORS.MEDIUM_GRAY);
        if(interestInfo.includes(props.label)){
            interestInfo.splice(interestInfo.indexOf(props.label),1);
        }
    } else if(displayColor===COLORS.MEDIUM_GRAY){
        if(!interestInfo.includes(props.label)){
            interestInfo.push(props.label);
        }
        setDisplayColor(COLORS.DARK_VOILET);
    }
    }}>
  <View style={[styles.categoryView,{borderColor:displayColor}]}>
      {(props.iconType==='MaterialIcons') && 
          <MaterialIcons name={props.icon}  style={[styles.categoryItems,{color:displayColor}]} size={44} />}
      {(props.iconType==='FontAwesome5') && 
          <FontAwesome5 name={props.icon}  style={[styles.categoryItems,{color:displayColor}]} size={44} />}
      <Text style={[styles.categoryItems,{color:displayColor}]}>{props.label}</Text>
  </View>
</TouchableOpacity>);
 }

const Header = (props) =>{
 return (<View style={styles.headerView}>
    <Image style={styles.headerLogo} source={require('./../../../assets/logo.png')} />
    </View>);
}

const PageTitle = (props) =>{
 return (<Text style={styles.pageTitle}>Choose your Interest</Text>);
};

const ViewInterestSection = (props) =>{
 return (<ScrollView styles={styles.interestSectionScroll}>
    <View style={styles.interestSectionView}>
    <View style={styles.interestColumn}>
    {categories.slice(0, Math.round(categories.length/2)).map((data,index)=>{
        return <DisplayCategory key={index} index={index} icon={data.icon} iconType={data.iconType} 
        label={data.label}/>
    })}
    </View>
    <View style={styles.interestColumn}>
    {categories.slice(Math.round(categories.length/2), categories.length).map((data,index)=>{
        return <DisplayCategory key={index} index={index} icon={data.icon} iconType={data.iconType} 
        label={data.label}/>
    })}
    </View>
    </View>
</ScrollView>);
} 

const NextButton = (props) =>{
 return (<View style={styles.nextButtonView}>
 <TouchableOpacity  onPress={() => navigation.push('AppNavigator',{data:props.data})}>
     <Text style={styles.nextButton}>Next</Text>
 </TouchableOpacity>
</View>);
}
return (
 <View style={styles.pageView}>
    <View style={styles.pageContentView}>
        <Header/>
        <View style={styles.pageContentSection}>
            <PageTitle/>    
            <ViewInterestSection/>    
        </View>
    </View>
    <NextButton/>
    <StatusBar backgroundColor={COLORS.DARK_VOILET} style="light"  translucent={false}  />
 </View>);
}

const styles = StyleSheet.create({ 
 interestSectionScroll:{backgroundColor:'#fff',marginTop:10,width:Dimensions.get('screen').width,height:Dimensions.get('screen').height-100, flexGrow: 0.95,paddingBottom:100},
 interestSectionView:{flex:3,flexDirection:'row',padding:15},
 interestColumn:{flex:1.5},
 pageView:{flex:16,backgroundColor:'#fff'},
 pageContentView:{flex:15},
 pageContentSection:{flex:15,marginTop:15},
 categoryView:{flex:1,padding:8,margin:10,backgroundColor:'#fff',borderRadius:8,borderWidth:1},
 categoryItems:{marginTop:5,textAlign:'center'},
 headerView:{flex:1},
 headerLogo:{width:130,height:40,marginTop:10,marginLeft:15},
 pageTitle:{textAlign:'center',fontWeight:'bold',fontSize:16,color:'#000'},
 nextButtonView:{flex:1,alignSelf:'center',flexWrap:'wrap'},
 nextButton:{color:COLORS.DARK_VOILET,fontWeight:'bold',textAlign:'center',paddingTop:10,paddingBottom:10,paddingRight:45,paddingLeft:45,borderRadius:8,borderWidth:1,borderColor:COLORS.DARK_VOILET}

});