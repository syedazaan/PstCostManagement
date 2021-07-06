import React from 'react';
import { KeyboardAvoidingView, TextInput, StyleSheet, TouchableOpacity, Text, View, Image, ImageBackground } from 'react-native';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigation from './TabNavigation';

import { styles } from '../styles/styles';
import  Colors  from '../styles/Colors';

import Icon from 'react-native-vector-icons/FontAwesome';
import Iconf from 'react-native-vector-icons/Feather';
import Icona from 'react-native-vector-icons/AntDesign';
import Iconfa from 'react-native-vector-icons/FontAwesome5';
import Iconi from 'react-native-vector-icons/Ionicons';
import Icono from 'react-native-vector-icons/Octicons';
import { Row } from 'native-base/lib/typescript/src';


const myIcon = <Icon name="google" size={20} color="black" />;
const myIcon1 = <Iconf name="mail" size={25} color="#B9BAC8" />;
const myIcon2 = <Icona name="apple1" size={20} color="black" />;
const myIcon3 = <Iconfa name="scroll" size={22} color="gray" />;
const myIcon4 = <Iconi name="chatbubble-ellipses-outline" size={25} color="gray" />;
const myIcon5 = <Icona name="checkcircle" size={20} color="#00BE7E" />;
const myIcon6 = <Iconf name="lock" size={25} color="#B9BAC8" />;
const myIcon7 = <Iconf name="eye-off" size={25} color="#B9BAC8" />;
const myIcon8 = <Icono name="primitive-dot" size={20} color="#B9BAC8" />;



export default class Login extends React.Component { 
    constructor(props){
        super(props)
        this.state = {
            test : true,
        }
     }

    render(){
        const  { navigation } = this.props
        return(
            <View style = {styles.container}>
               
                {/* Image_Block */}
                <View style = {[styles.flexOneAndHalf, styles.marginLeft16, styles.marginRight16, styles.bgWhite, styles.border]}>
                    <Image 
                        source = {require('../images/loginimg.jpg')}
                        style = {{flex:1, alignItems:"center", justifyContent:"center", width:362, height:50 }}
                    />
                </View>
               
                {/* MiddleContent_Block */}
                <View style = {[styles.flexFive, styles.bgWhite, styles.marginLeft16, styles.marginRight16, styles.border]}>
                    
                    {/* Welcome_Block */}
                    <View style = {[styles.flexOne, styles.allCenter]}>
                        <Text style = {[styles.fontSize23, styles.fontWeightBold]}>Welcome Back !</Text>    
                    </View>
                    
                    {/* Empty_Row */}
                    <View style = {[styles.flexHalf, styles.border]}></View>
                    
                    {/* Email_Row */}
                    <View style = {[styles.flexTwoAndHalf, styles.border]}>
                        <View style = {[styles.flexOne, styles.border ]}>
                            <Text style = {[styles.fontSize15, styles.greyDark, styles.fontWeightBold ]}>Email</Text>
                        </View>
                       
                        <View style = {[styles.flexTwoAndHalf, styles.borderColorGrey, styles.row, styles.marginTop8, styles.marginBottom8, styles.radius16, styles.border ]}>
                            <View style = {[styles.flexOne, styles.allCenter, styles.border]}>{myIcon1}</View>
                            <View style = {[styles.flexFive,  styles.border]}>
                                <TextInput 
                                    placeholder ="example@gmail.com"
                                    style = {[styles.marginLeft4,  styles.fontSize17, styles.LetterGrey ]}></TextInput>
                            </View>
                        </View>
                    </View>
                    
                    {/* Password_Row */}
                    <View style = {[styles.flexTwoAndHalf, styles.border]}>
                        <View style = {[styles.flexOne, styles.border ]}>
                            <Text style = {[styles.fontSize15, styles.greyDark, styles.fontWeightBold ]}>Password</Text>
                        </View>
                        <View style = {[styles.flexTwoAndHalf, styles.marginTop8, styles.marginBottom8, styles.radius16, styles.borderColorGrey, styles.row, styles.border ]}>
                            <View style = {[styles.flexOneAndQuarter, styles.allCenter, styles.border]}>{myIcon6}</View>
                            <View style = {[styles.flexFive, styles.border]}>
                                <TextInput
                                    // placeholder = '{myIcon8}{myIcon8}{myIcon8}{myIcon8}{myIcon8}myIcon8}{myIcon8}'
                                    placeholder = "*******"

                                     style = {[styles.marginLeft4,  styles.fontSize17, styles.LetterGrey]}></TextInput>
                            </View>
                            <View style = {[styles.flexOneAndQuarter, styles.allCenter, styles.border]}>{myIcon7}</View>
                        </View>
                    </View>
                    
                    {/* Remember_Row */}
                    <View style = {[styles.flexOne, styles.row, styles.border]}>
                        <View style = {[styles.flexOne, styles.border]}>
                            <Text style = {[styles.fontSize15, styles.greyDark]}>{myIcon5} Remember me</Text>
                        </View>
                        <View style = {[styles.flexHalf, styles.border]}></View>
                        <View style = {[styles.flexOne, styles.bottomHorizontal, styles.border]}>
                            <Text style = {[styles.fontSize15, styles.fontWeightBold, styles.DarkOrange]}>Forgot Password?</Text>
                        </View>
                    </View>
                    
                    {/* SignIn_Button */}
                    <TouchableOpacity 
                          onPress = {( ) => navigation.navigate("TabNavigation")}
                          style = {[styles.flexOneAndQuarter, styles.radius16, styles.marginTop8, styles.marginBottom8, styles.allCenter, styles.bgSignInBlue, styles.border]}>
                        <Text style = {[styles.fontSize19, styles.fontWeightBold, styles.greyLight]}>Sign In</Text>
                    </TouchableOpacity>
                    
                    {/* OR_Row */}
                    <View style = {[styles.flexOne, styles.row, styles.border]}>
                        <View style = {[styles.flexThree, styles.row, styles.allCenter, styles.border]}>
                            <View style = {[ styles.flexOne, styles.border, styles.borderColorGrey ]}></View> 
                        </View>
                        <View style = {[styles.flexQuarterToOne, styles.allCenter, styles.border]}>
                            <Text style = {[styles.fontSize17, styles.greyDark]}>Or</Text>
                        </View>
                        <View style = {[styles.flexThree, styles.allCenter, styles.row, styles.border]}>
                            <View style = {[ styles.flexOne, styles.border, styles.borderColorGrey ]}></View>
                        </View>
                    </View>
                    
                    {/* Google_Continue */}
                    <View style = {[styles.flexOne, styles.row, styles.allCenter, styles.border]}>
                        <Text style ={[styles.fontSize17, styles.marginLeft16, styles.fontWeight600 ]}>{myIcon}</Text>
                        <Text style = {[ styles.fontSize17, styles.fontWeight600, styles.marginLeft8]}>Continue with Google</Text>
                    </View>
                    
                    {/* Apple_Continue */}
                    <View style = {[styles.flexOne, styles.row, styles.allCenter, styles.border]}>
                        <Text style ={[styles.fontSize17, styles.marginLeft4, styles.fontWeight600 ]}>{myIcon2}</Text>
                        <Text style = {[ styles.fontSize17, styles.fontWeight600, styles.marginLeft8]}>Continue with Apple</Text>
                    </View>

                </View>
               
                {/* CreateOne_Block */}
                <View style = {[styles.flexHalf, styles.row, styles.border]}>
                    <View style = {[styles.flexOne, styles.bottomHorizontal, styles.centerVertical, styles.border]}>
                        <Text style ={[styles.fontSize15, styles.fontWeightBold, styles.greyDark]}>Still without account?</Text>
                    </View>

                    <View style = {[styles.flexOne, styles.paddingLeft8, styles.centerVertical,  styles.border]}>
                        <Text style ={[styles.fontSize15, styles.fontWeightBold, styles.DarkOrange]}>Create One</Text>
                    </View>
                </View>
                
            </View>
        );
    }
}

const styles1  = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#fff",
        // alignItems:"center",
        // justifyContent:"center",
    },
});