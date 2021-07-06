import React from 'react';
import { TouchableOpacity, StyleSheet, Text,  View, } from 'react-native';
import REact, { Component } from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import  SwiperFlatList from './screens/Swiper';

import { styles } from '../styles/styles';
import Colors from '../styles/Colors';

import Swiper from './Swiper';
import  Login  from './Login';
import Slide1 from './Slide1';
import Slide2 from './Slide2';

import Icon from 'react-native-vector-icons/FontAwesome';
import Iconf from 'react-native-vector-icons/Feather';
import Icona from 'react-native-vector-icons/AntDesign';
import Iconfa from 'react-native-vector-icons/FontAwesome5';
import Iconi from 'react-native-vector-icons/Ionicons';


const myIcon = <Icon name="search" size={30} color="gray" />;
const myIcon1 = <Iconf name="search" size={30} color="gray" />;
const myIcon2 = <Icona name="home" size={30} color="rgb(41,127,238)" />;
const myIcon3 = <Iconfa name="arrow-circle-right" size={50} color="#608EE9" />;
const myIcon4 = <Iconi name="chatbubble-ellipses-outline" size={25} color="gray" />;
const myIcon5 = <Icona name="bells" size={25} color="grey" />;


export default class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            test : true,
        }
 }

 render(){
     const  { navigation } = this.props
        // console.log("value",this.StackNavigator);
        return (
            <View style = {styles1.container}>
                {/* Skip_block */}
                <View style = {[styles.flexQuarterToOne, styles.Margin20, styles.justifyContentCenter, styles.bottomHorizontal, styles.border]}>
                    <TouchableOpacity 
                        onPress = {( ) => navigation.navigate('Login')} 
                        style = {[]}><Text style = {[styles.fontSize19]}>Skip</Text>
                    </TouchableOpacity>
                </View>
                {/* Swiper_block */}
                <View style = {[styles.flexFive, styles.border]}>    
                   <Swiper />
                </View> 
                {/* Content_block */}
                <View style = {[styles.flexFour, styles.border]}>
                    {/* Reduce_Stress */}
                    <View style = {[styles.flexQuarterToOne, styles.allCenter, styles.paddingTop20, styles.border]}>
                        <Text style = {[styles.fontSize19, styles.fontWeightBold,]}>Reduce Stress</Text>                        
                    </View>
                    {/* Contrary_block */}
                    <View style = {[styles.flexOne, styles.centerHorizontal, styles.border]}>
                        <Text style = {[styles.greyDark,]}>Contrary to popular belief, Lorem Ipusum</Text>
                        <Text style = {[styles.greyDark, styles.marginTop4]}>is not simply random text.</Text>
                    </View>
                    {/* PurpleButton_block */}
                    
                    <TouchableOpacity
                        
                        onPress = {( ) => navigation.navigate('Login')} 
                        style = {[styles.flexOne, styles.allCenter, styles.border]}>
                              {myIcon3}
                    </TouchableOpacity>
              
                     {/* Pagebottomline_block */}
                    <View style = {[styles.flexHalf, styles.row, styles.marginTop18, styles.border]}>
                        <View style = {[styles.flexQuarterToOne, styles.border]}/>
                        <View style = {[styles.flexQuarterToOne, styles.border]}>
                            <View style = {[styles.flexOne,styles.border]}></View>
                            <View style = {[styles.flexOne, styles.marginTop24, styles.radius18, styles.bgBlack, styles.border]}></View>  
                        </View>
                        <View style = {[styles.flexQuarterToOne, styles.border]}></View>
                    </View>
                </View>
            </View>
        );
    } 
}

// const Main = ({navigation}) => {
//     return(
//        <View style = {styles1.container}>
//                 <View style = {[styles.flexQuarterToOne, styles.Margin20, styles.justifyContentCenter, styles.bottomHorizontal, styles.border]}>
//                     <Text style = {[styles.fontSize19]}>Skip</Text>
//                 </View>
//                 <View style = {[styles.flexFive, styles.border]}>    
//                    <Swiper />
//                 </View> 
//                 <View style = {[styles.flexFour, styles.border]}>
//                     <View style = {[styles.flexQuarterToOne, styles.allCenter, styles.paddingTop20, styles.border]}>
//                         <Text style = {[styles.fontSize19, styles.fontWeightBold,]}>Reduce Stress</Text>                        
//                     </View>
//                     <View style = {[styles.flexOne, styles.centerHorizontal, styles.border]}>
//                         <Text style = {[styles.greyDark,]}>Contrary to popular belief, Lorem Ipusum</Text>
//                         <Text style = {[styles.greyDark, styles.marginTop4]}>is not simply random text.</Text>
//                     </View>
                    
//                     <TouchableOpacity
                        
//                         onPress = {( ) => navigation.navigate('Login')} 
//                         style = {[styles.flexOne, styles.allCenter, styles.border]}>
//                               {myIcon3}
//                     </TouchableOpacity>
              
//                      {/* Pagebottomline_block */}
//                     <View style = {[styles.flexHalf, styles.row, styles.marginTop18, styles.border]}>
//                         <View style = {[styles.flexQuarterToOne, styles.border]}></View>
//                         <View style = {[styles.flexQuarterToOne, styles.border]}>
//                             <View style = {[styles.flexOne,styles.border]}></View>
//                             <View style = {[styles.flexOne, styles.marginTop24, styles.radius18, styles.bgBlack, styles.border]}></View>  
//                         </View>
//                         <View style = {[styles.flexQuarterToOne, styles.border]}></View>
//                     </View>
//                 </View>
//             </View>
//     )
// }
// export default Main;

const styles1 = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#fff",
        // alignItems:'center',
        // justifyContent:'center',
    },
});