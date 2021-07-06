import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';

import { styles } from '../styles/styles';
import  Colors from '../styles/Colors';  

class SetPlan extends React.Component {
    render( ) {
        return (
            <View style= {styles1.container}>
                  {/* Header_Block */}
                  <View style = {[ styles.flexOne, styles.row, styles.border ]}>
                      <View style = {[ styles.flexOne, styles.border ]}></View>
                      <View style = {[ styles.flexFive, styles.border ]}></View>
                      <View style = {[ styles.flexOne, styles.border ]}></View>
                  </View> 
                 
                  {/* Image_Block */}
                  <View style = {[ styles.flexFive, styles.border ]}></View>    
                 
                  {/* Name_block */}
                  <View style = {[ styles.flexOne, styles.border ]}></View> 
                 
                  {/* TextInput_block */}
                  <View style = {[ styles.flexOne, styles.bgGreyLight, styles.radius10, styles.border ]}></View>    
                 
                  {/* Category_Block */}
                  <View style = {[ styles.flexOne, styles.border ]}></View>    
                 
                  {/* Icons_Block */}
                  <View style = {[ styles.flexOneAndHalf, styles.row, styles.border ]}>
                      <View style = {[ styles.flexOne, styles.radius16, styles.marginTop4, styles.marginRight8, styles.marginBottom8, styles.border]}></View>
                      <View style = {[ styles.flexOne, styles.radius16, styles.marginTop4, styles.marginRight8, styles.marginLeft4, styles.marginBottom8, styles.border]}></View>
                      <View style = {[ styles.flexOne, styles.radius16, styles.marginTop4, styles.marginRight8, styles.marginLeft4, styles.marginBottom8, styles.border]}></View>
                      <View style = {[ styles.flexOne, styles.radius16, styles.marginTop4, styles.marginRight8, styles.marginLeft4, styles.marginBottom8, styles.border]}></View>
                      <View style = {[ styles.flexOne, styles.radius16, styles.marginTop4, styles.marginRight4, styles.marginLeft4, styles.marginBottom8, styles.border]}></View>
                  </View>    
                 
                  {/* Budget_Block */}
                  <View style = {[ styles.flexOne, styles.border ]}></View>    
                 
                 {/* TexyInput_Block */}
                  <View style = {[ styles.flexOne, styles.bgGreyLight, styles.marginBottom8, styles.radius10, styles.border ]}></View>    
                 
                  {/* Save_Block */}
                  <TouchableOpacity style = {[ styles.flexOne, styles.bgBlue, styles.radius10, styles.marginTop8, styles.border ]}></TouchableOpacity>                      
            </View>
        );
    }
}

const styles1 =StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    marginTop:20,
    marginLeft:20, 
    marginRight:20,
    // alignItems:'center',
    // justifyContent:'center',
  },
});

const SetPlanScreen = SetPlan
export { SetPlanScreen };