import React from 'react';
import { StyleSheet,Text,View,  Image, TouchableOpacity, ImageBackground,} from 'react-native';
import { createAppContainer, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';  


import { styles } from '../styles/styles';
import Colors from '../styles/styles';

class Dashboard extends React.Component {
    render( ) {
        return (
            <View style= {styles1.container}>
               
                 {/* Header_Block */}
                <View style = {[styles.flexOne, styles.row, styles.border]}>
                    <View style = {[styles.flexOne, styles.border]}></View>
                    <View style = {[styles.flexFive, styles.allCenter, styles.border]}>
                      <Text style = {[ styles.white, styles.fontSize17]}>Reports</Text>
                    </View>
                    <View style = {[styles.flexOne, styles.border]}></View>
                </View>
                
                 {/* Date_Block */}
                 <View style={[ styles.flexOne, styles.row, styles.radius28, styles.marginLeft10, styles.marginRight10, styles.marginTop10, styles.marginBottom10, styles.radius28, styles.border ]}>
                    <TouchableOpacity style = {[styles.flexOne, styles.allCenter, styles.border]}>
                        <Text style = {[styles.fontSize15, styles.white, styles.fontWeightBold]}>Day</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        // onPress = {( ) => navigation.navigate('Monthly')} 
                        style = {[styles.flexOneAndQuarter, styles.bgWhite, styles.allCenter, styles.radius28, styles.border]}>
                            <Text style = {[styles.fontSize15, styles.black, styles.fontWeightBold]}>Month</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {[styles.flexOne, styles.allCenter, styles.border]}>
                        <Text style = {[styles.fontSize15, styles.greyDark, styles.white, styles.fontWeightBold]}>Yearly</Text>
                    </TouchableOpacity>
                </View>
                
                {/* Dollar_Block */}
                <View style = {[styles.flexOneAndHalf, styles.row, styles.marginLeft10, styles.marginRight10, styles.border]}>
                    <View style = {[styles.flexOne, styles.row, styles.centerHorizontal, styles.border]}>
                        <Text style = {[styles.fontSize17, styles.white, styles.fontWeightBold,]}>$</Text>
                        <Text style = {[styles.fontSize36, styles.white, styles.fontWeightBold, ]}>2,870</Text>
                    </View>
                    <View style = {[styles.flexOne]}></View>
                    <View style = {[styles.flexOne, styles.allCenter, styles.row, styles.Margin10, styles.radius22,  styles.border]}>
                        <Text style = {[styles.white, styles.fontSize15 ]}>July 2021</Text>
                        <Text>i</Text>
                    </View>
                </View>
               
               {/* PieGraph_Block */}
                <View style = {[styles.flexFive, styles.row, styles.border]}>
                    <View style = {[styles.flexOne, styles.border]}></View>
                    <View style = {[ styles.flexThree,  styles.radius50, styles.margin6, styles.allCenter, styles.row, styles.border]}>
                      <View style = {[ styles.width80, styles.height80, styles.radius50, styles.row, styles.border]}>
                          <View style = {[styles.width70, styles.height70, styles.allCenter, styles.marginLeft16, styles.marginTop32, styles.row, styles.radius50]}>
                              {/* <View style = {[styles.width70, styles.height70, styles.allCenter, styles.height50, styles.radius50, styles.border]}>   */}
                              <Text style = {[styles.fontSize17, styles.white,  styles.fontWeightBold,]}>$</Text>
                              <Text style = {[styles.fontSize36, styles.white,  styles.fontWeightBold, ]}>2,870</Text>
                              {/* </View> */}
                          </View>
                      </View> 
                    </View>  
                    <View style = {[styles.flexOne, styles.border]}></View>
                </View>
                
                {/* BarGraph_Block */}
                <View style = {[styles.flexFive, styles.borderTopRadius60, styles.bgWhite, styles.border]}>
                    <View style = {[styles.flexHalf, styles.row, styles.border ]}>
                        <View style = {[styles.flexTwo, styles.border]}></View>
                        <View style = {[styles.flexHalf, styles.bgBarGrey, styles.radius22, styles.marginTop10, styles.border]}></View>
                        <View style = {[styles.flexTwo, styles.border]}></View>
                    </View>
                    <View style = {[styles.flexOne, styles.row, styles.border ]}>
                          <View style = {[styles.flexOne, styles.row, styles.border]}>
                             <Text style = {[styles.marginLeft16, styles.fontWeightBold, styles.fontSize17, ]}>Expenses</Text>
                             <Text style = {[styles.marginLeft4, styles.marginTop4]}>i</Text>
                          </View>
                          <View style = {[styles.flexOne, styles.border]}></View>
                    </View>
                    <View style = {[styles.flexFive, styles.border ]}>
                      <View style = {[styles.flexFive, styles.row, styles.border]}>
                          <View style = {{flex:1, marginLeft:10, marginTop:95, backgroundColor:"lightgrey", borderRadius:5, marginRight:10, borderWidth:1,}}></View>
                          <View style = {{flex:1, marginLeft:10, marginTop:55, backgroundColor:"lightgrey", borderRadius:5, marginRight:10, borderWidth:1,}}></View>
                          <View style = {{flex:1, marginLeft:10, marginTop:105, backgroundColor:"lightgrey", borderRadius:5, marginRight:10, borderWidth:1,}}></View>
                          <View style = {{flex:1, marginLeft:10, marginTop:30, backgroundColor:"blue", borderRadius:5, marginRight:10, borderWidth:1,}}></View>
                          <View style = {{flex:1, marginLeft:10, marginTop:5, backgroundColor:"lightgrey", borderRadius:5, marginRight:10, borderWidth:1,}}></View>
                          <View style = {{flex:1, marginLeft:10, marginTop:55, backgroundColor:"lightgrey", borderRadius:5, marginRight:10, borderWidth:1,}}></View>
                          {/* <View style = {[styles.flexOne, styles.border]}></View> */}
                          {/* <View style = {[styles.flexOne, styles.border]}></View> */}
                          {/* <View style = {[styles.flexOne, styles.border]}></View> */}
                          {/* <View style = {[styles.flexOne, styles.border]}></View> */}
                          {/* <View style = {[styles.flexOne, styles.border]}></View> */}
                          {/* <View style = {[styles.flexOne, styles.border]}></View> */}
                      </View>
                      <View style = {[styles.flexOne, styles.row,  styles.border]}>
                          <View style = {[styles.flexOne, styles.allCenter, styles.marginLeft16, styles.border]}><Text>Jan</Text></View>
                          <View style = {[styles.flexOne, styles.allCenter, styles.marginLeft16, styles.border]}><Text>Feb</Text></View>
                          <View style = {[styles.flexOne, styles.allCenter, styles.marginLeft16, styles.border]}><Text>Mar</Text></View>
                          <View style = {[styles.flexOne, styles.allCenter, styles.marginLeft16, styles.border]}><Text>Apr</Text></View>
                          <View style = {[styles.flexOne, styles.allCenter, styles.marginLeft16, styles.border]}><Text>May</Text></View>
                          <View style = {[styles.flexOne, styles.allCenter, styles.marginLeft16, styles.border]}><Text>June</Text></View>
                      </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles1 =StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'rgb(79,70,186)',
    // alignItems:'center',
    // justifyContent:'center',
  },
});

const DashboardScreen = Dashboard
export {DashboardScreen};
