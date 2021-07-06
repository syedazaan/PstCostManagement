import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView, ImageBackground,} from 'react-native';
// import { VictoryGroup, VictoryLine, VictoryBar, VictoryChart, VictoryTheme, sampleData } from "victory";
import { VictoryGroup, VictoryLine, VictoryBar, VictoryChart, VictoryTheme, sampleData } from "victory-native";

import { createAppContainer, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { SVG } from "react-native-svg";

import  MonthlyScreen from "./Monthly";

import Icon from 'react-native-vector-icons/FontAwesome';
import Iconf from 'react-native-vector-icons/Feather';
import Icona from 'react-native-vector-icons/AntDesign';
import Iconfa from 'react-native-vector-icons/FontAwesome5';
import Iconi from 'react-native-vector-icons/Ionicons';
import Iconmci from 'react-native-vector-icons/MaterialCommunityIcons';
import Icone from 'react-native-vector-icons/Entypo';

const myIcon = <Icon name="search" size={30} color="gray" />;
const myIcon1 = <Iconf name="search" size={30} color="gray" />;
const myIcon2 = <Icona name="dingding-o" size={30} color="rgb(233,175,123)" />;
const myIcon3 = <Iconfa name="arrow-circle-right" size={50} color="#608EE9" />;
const myIcon4 = <Iconi name="chatbubble-ellipses-outline" size={25} color="gray" />;
const myIcon5 = <Icona name="bells" size={25} color="grey" />;
const myIcon6 = <Icona name="dingding-o" size={30} color="rgb(195,155,255)" />;
const myIcon7 = <Icona name="dingding-o" size={30} color="rgb(118,233,255)" />;
const myIcon8 = <Iconmci name="bell-circle-outline" size={40} color="grey" />;
const myIcon9 = <Icone name="grid" size={40} color="midnightblue" />;



import { styles } from '../styles/styles';
import Colors  from '../styles/Colors';


import Drawer from './Drawer';
// import { MonthlyScreen } from './Monthly';

 class Home extends React.Component {
    render( ) {
        return (
            <View style= {styles1.container}>
                {/* Header_Block */}
                <View style={[ styles.flexOne, styles.row, styles.border ]} >
                    <View style = {[styles.flexOne, styles.allCenter, styles.border]}>{myIcon9}</View>
                    <View style = {[styles.flexFive, styles.border]}></View>
                    <View style = {[styles.flexOne, styles.allCenter, styles.border]}>{myIcon8}</View>
                </View>
                {/* Date_Block */}
                <View style={[ styles.flexOne, styles.row, styles.bgWhite, styles.Margin20, styles.radius28, styles.border ]}>
                    <TouchableOpacity style = {[styles.flexOne, styles.allCenter, styles.border]}>
                        <Text style = {[styles.fontSize15, styles.greyDark, styles.fontWeightBold]}>Day</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress = {( ) => navigation.navigate('Monthly')} 
                        style = {[styles.flexOneAndQuarter, styles.bgBlue, styles.allCenter, styles.radius28, styles.border]}>
                            <Text style = {[styles.fontSize15, styles.white, styles.fontWeightBold]}>Month</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {[styles.flexOne, styles.allCenter, styles.border]}>
                        <Text style = {[styles.fontSize15, styles.greyDark, styles.fontWeightBold]}>Yearly</Text>
                    </TouchableOpacity>
                </View>
                {/* Dollar_Block */}
                <View style={[ styles.flexOne, styles.row, styles.marginLeft16, styles.marginRight16, styles.border ]}>
                    <View style = {[styles.flexOne, styles.row, styles.centerHorizontal, styles.border]}>
                        <Text style = {[styles.fontSize17, styles.fontWeightBold,]}>$</Text>
                        <Text style = {[styles.fontSize36, styles.fontWeightBold, ]}>2,870</Text>
                    </View>
                    <View style = {[styles.flexOne, styles.centerVertical,  styles.flexEndHorizontal, styles.border]}>
                        <Text style = {[styles.greyDark, styles.fontSize17]}>Working ballance</Text>
                    </View>
                </View>
                {/* Graph_Block */}
                <View style={[ styles.flexFive, styles.border ]} >

                                                            <VictoryChart
                                                                theme={VictoryTheme.material}
                                                                domainPadding={50}
                                                                padding={{left:50, top:30, bottom:140,  right:50, }}
                                                            >
                                                            <VictoryBar
                                                                cornerRadius={{ top: ({ datum }) => datum.x * 3 }}
                                                                style={{ data: { fill: "#c43a31" } }}
                                                                data={sampleData}
                                                            />
                                                         </VictoryChart>
{/* 
                    <VictoryChart
                        theme={VictoryTheme.material}
                    >
                    
                        <VictoryLine
                            style={{
                                data: { stroke: "#c43a31" },
                                parent: { border: "1px solid #ccc"}
                            }}
                    
                            data={[
                                { x: 1, y: 2 },
                                { x: 2, y: 3 },
                                { x: 3, y: 5 },
                                { x: 4, y: 4 },
                                {x: 5, y: 7 }
                            ]}
                        />

                    </VictoryChart> */}
                
                {/* <VictoryGroup
                    offset={25}
                        style={{
                            data: {
                            fillOpacity: 0.7, stroke: "black", strokeWidth: 3
                            }
                        }}
                >
 
                 <VictoryLine
                    style={{ data: { stroke: "#c43a31" }}}
                    data={[{x: "a", y: 2}, {x: "b", y: 3}, {x: "c", y: 5}]}
                />

                <VictoryLine
                    data={[{x: "a", y: 1}, {x: "b", y: 4}, {x: "c", y: 5}]}
                />
 
                <VictoryLine
                    data={[{x: "a", y: 3}, {x: "b", y: 2}, {x: "c", y: 6}]}
                />

                </VictoryGroup> */}
                
                
                </View>
                {/* Box_Block */}
                <View style={[ styles.flexFour, styles.bgWhite, styles.border ]} >
                    <View style = {[styles.flexOneAndHalf, styles.row, styles.border]}>
                        <View style = {[styles.flexTwo, styles.marginLeft16, styles.centerVertical, styles.border]}>
                            <Text style = {[styles.fontSize19, styles.fontWeightBold]}>Your Budgets</Text>
                        </View>
                        <View style = {[styles.flexQuarterToOne, styles.allCenter, styles.bgGreyLight, styles.margin6, styles.radius10, styles.border]}>
                            <Text style = {[ styles.fontSize15, styles.fontWeightBold ]}>July 2021</Text>
                        </View>
                    </View>
                    <View style = {[styles.flexFive, styles.row, styles.border]}>
                        {/* Box_1 */}
                        <View style = {[styles.flexOne, styles.marginLeft16, styles.marginTop8, styles.marginBottom8, styles.marginRight4, styles.bgLightOrange, styles.radius16, styles.border]}>
                            <View style = {[styles.flexTwoAndQuater, styles.marginLeft10, styles.marginTop10,]}>{myIcon2}</View>
                            <View style = {[styles.flexOneAndQuarter, styles.marginLeft10,  styles.row,]}>
                                <Text style = {[styles.fontSize15, styles.paddingRight4, styles.marginTop4,  styles.fontWeightBold,]}>$</Text>
                                <Text style = {[styles.fontSize19, styles.fontWeightBold, ]}>5.88</Text>
                            </View>
                            <View style = {[styles.flexOneAndQuarter, styles.paddingTop6, styles.border]}>
                                <Text style = {[ styles.paddingLeft8,  styles.fontSize13, styles.fontWeightBold]}>Croissant & Coffee</Text>
                            </View>
                            <View style = {[styles.flexOne, styles.allCenter, styles.border]}>
                                <Text style = {[styles.greyDark, styles.paddingLeft8, styles.fontSize13]} >Paul coffee shop</Text>
                            </View>
                        </View>
                        {/* Box_2 */}
                        <View style = {[styles.flexOne, styles.marginLeft8, styles.marginTop8, styles.marginBottom8, styles.marginRight4, styles.bgCMLightBlue, styles.radius16, styles.border]}>
                            <View style = {[styles.flexTwoAndQuater, styles.marginLeft10, styles.marginTop10,]}>{myIcon6}</View>
                            <View style = {[styles.flexOneAndQuarter, styles.marginLeft10,  styles.row, ]}>
                                <Text style = {[styles.fontSize15, styles.paddingRight4, styles.marginTop4,  styles.fontWeightBold,]}>$</Text>
                                <Text style = {[styles.fontSize19, styles.fontWeightBold, ]}>95.88</Text>
                            </View>
                            <View style = {[styles.flexOneAndQuarter,  styles.paddingTop6, styles.border]}>
                                <Text style = {[ styles.paddingLeft8,  styles.fontSize13, styles.fontWeightBold]}>Online Education</Text>
                            </View>
                            <View style = {[styles.flexOne, styles.paddingLeft4, styles.border]}>
                                <Text style = {[styles.greyDark, styles.paddingLeft8, styles.fontSize13]} >Design Training</Text>
                            </View>
                        </View>
                         {/* Box_3 */}
                        <View style = {[styles.flexOne, styles.marginLeft8, styles.marginTop8, styles.marginBottom8, styles.marginRight4, styles.bgCMLightPurple, styles.radius16, styles.border]}>
                            <View style = {[styles.flexTwoAndQuater, styles.marginLeft10, styles.marginTop10,]}>{myIcon7}</View>
                            <View style = {[styles.flexOneAndQuarter, styles.marginLeft10,  styles.row,]}>
                                <Text style = {[styles.fontSize15, styles.paddingRight4, styles.marginTop4,  styles.fontWeightBold,]}>$</Text>
                                <Text style = {[styles.fontSize19, styles.fontWeightBold, ]}>95.88</Text>
                            </View>
                            <View style = {[styles.flexOneAndQuarter, styles.paddingTop6, styles.border]}>
                                <Text style = {[ styles.paddingLeft8,  styles.fontSize13, styles.fontWeightBold]}>Online Education</Text>
                            </View>
                            <View style = {[styles.flexOne,  styles.paddingLeft4, styles.border]}>
                            <Text style = {[styles.greyDark, styles.paddingLeft8, styles.fontSize13]} >Design Training</Text>
                            </View>
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
  },
});

        // <NavigationContainer>
        //     <Stack.Navigator
        //        screenOptions={{
        //            headerShown: false
        //        }}
        //     >
        //         <Stack.Screen name="Monthly" component={ MonthlyScreen } />
              
    
        //     </Stack.Navigator>
        // </NavigationContainer>
    


const HomeScreen = Home
export {HomeScreen};