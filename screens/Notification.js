import React from 'react';
import { StyleSheet,Text,View,  Image, ImageBackground,} from 'react-native';

import { styles } from '../styles/styles';
import  Colors from '../styles/Colors';


class Notification extends React.Component {
    render( ) {
        return (
            <View style= {styles1.container}>
                    {/* Header_Block */}
                  <View style = {[styles.flexQuarterToOne, styles.row, styles.border]}>
                        <View style = {[styles.flexOne, styles.border]}></View>
                        <View style = {[styles.flexFive, styles.border]}></View>
                        <View style = {[styles.flexOne, styles.border]}></View>
                  </View>
                  {/* white_BoxBlock */}
                  <View style = {[styles.flexTwoAndHalf, styles.marginTop4, styles.marginBottom4, styles.radius22, styles.border]}>
                      <View style = {[styles.flexOne, styles.border]}></View>
                      <View style = {[styles.flexQuarterToOne, styles.border]}></View>
                      <View style = {[styles.flexOneAndQuarter, styles.row, styles.border]}>
                            <View style = {[styles.flexTwo, styles.border]}></View>
                            <View style = {[styles.flexOne, styles.marginRight16, styles.bgBlue, styles.radius10, styles.border]}></View>
                      </View>
                      <View style = {[styles.flexQuarterToOne, styles.border]}></View>
                      <View style = {[styles.flexQuarterToOne, styles.border]}></View>
                  </View>
                  {/* Accounts_Block */}
                  <View style = {[styles.flexQuarterToOne, styles.border]}></View>
                  {/* Boxes_Block */}
                  <View style = {[styles.flexThree, styles.row, styles.border]}>
                        <View style = {[styles.flexOne, styles.marginTop8, styles.marginBottom8, styles.marginRight8, styles.radius22, styles.border]}>
                              <View style = {[styles.flexThree, styles.border]}></View>
                              <View style = {[styles.flexOne, styles.border]}></View>
                              <View style = {[styles.flexOne, styles.border]}></View>
                              <View style = {[styles.flexQuarterToOne, styles.border]}></View>
                        </View>
                        <View style = {[styles.flexOne, styles.marginTop8,  styles.marginBottom8, styles.marginRight8, styles.marginLeft4, styles.radius22, styles.border]}>
                              <View style = {[styles.flexThree, styles.border]}></View>
                              <View style = {[styles.flexOne, styles.border]}></View>
                              <View style = {[styles.flexOne, styles.border]}></View>
                              <View style = {[styles.flexQuarterToOne, styles.border]}></View>
                        </View>
                        <View style = {[styles.flexOne, styles.marginTop8, styles.marginBottom8, styles.marginRight8, styles.radius22, styles.marginLeft4, styles.border]}>
                              <View style = {[styles.flexThree, styles.border]}></View>
                              <View style = {[styles.flexOne, styles.border]}></View>
                              <View style = {[styles.flexOne, styles.border]}></View>
                              <View style = {[styles.flexQuarterToOne, styles.border]}></View>
                        </View>
                        {/* <View style = {[styles.flexOne, styles.border]}></View> */}
                        {/* <View style = {[styles.flexOne, styles.border]}></View> */}
                  </View>
                 {/* Card_Block  */}
                 <View style = {[styles.flexThree, styles.marginTop10, styles.radius22, styles.bgBlue, styles.border]}>
                      <View style = {[ styles.flexOneAndHalf, styles.marginTop8, styles.row, styles.border ]}>
                            <View style = {[ styles.flexOneAndHalf,  styles.border ]}></View>
                            <View style = {[ styles.flexQuarterToOne, styles.margin6, styles.marginRight16, styles.bgWhite, styles.radius10,  styles.border ]}></View>
                                  
                            
                      </View>
                      <View style = {[ styles.flexQuarterToOne, styles.border ]}></View>
                      <View style = {[ styles.flexOne, styles.row, styles.border ]}>
                            <View style = {[styles. flexOne, styles.border]}></View>
                            <View style = {[styles. flexOne, styles.border]}></View>
                      </View>
                      <View style = {[ styles.flexOneAndHalf, styles.row, styles.border ]}>
                            <View style = {[styles.flexOne, styles.border]}></View>
                            <View style = {[styles.flexOne, styles.border]}></View>
                      </View>
                      <View style = {[ styles.flexOne, styles.marginBottom8, styles.border ]}></View>
                 </View>
            </View>
        );
    }
}

const styles1 =StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    margin:20,
    // alignItems:'center',
    // justifyContent:'center',
  },
});

const NotificationScreen = Notification
export { NotificationScreen };