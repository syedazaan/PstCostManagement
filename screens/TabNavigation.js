import { forModalPresentationIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
import React from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, TextInput, KeyboardAvoidingView, FlatList, TouchableOpacity, ImageBackground, ScrollView, TouchableHighlightBase } from 'react-native';

import { Drawer } from "./Drawer";
import { NotificationScreen } from "./Notification";
import { SetPlanScreen } from "./SetPlan";
import { HomeScreen } from "./Home";
import { DashboardScreen } from "./Dashboard";
import { PlusScreen } from "./Plus";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createAppContainer, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { styles } from '../styles/styles';
import  Colors from '../styles/Colors';

import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SLIcons from 'react-native-vector-icons/SimpleLineIcons';
import ANIcons from 'react-native-vector-icons/AntDesign';
import FAIcons from 'react-native-vector-icons/FontAwesome';
import FONIcons from 'react-native-vector-icons/Fontisto';
import ENIcons from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

    class TabNavigation extends React.Component {
        homeScreen = () => {
            return(
                <View style = {{ flex: 1, justifyContent: 'center', alignItems:"center"}}>
                    <Text>HomeScreen</Text>
                </View>
            );
        }

        notificationScreen = () => {
            return (
                <View style = {{ flex:1, justifyContent: 'center', alignItems:"center"}}>
                    <Text>NotificationScreen</Text>
                </View>
            );
        }

        dashboardScreen = () => {
            return(
                <View style = {{flex:1, justifyContent: 'center', alignItems:'center'}}>
                    <Text>DashboardScreen</Text>
                </View>
            );
        }

        SetPlanScreen = () => {
            return(
                <View style = {{flex:1, justifyContent: 'center', alignItems:'center'}}>
                    <Text>SetPlanScreen</Text>
                </View>
            );
        }

         myTabs = () => {
             return(
                 <Tab.Navigator>
                     <Tab.Screen name = "Home" component = { HomeScreen } />
                     <Tab.Screen name = "Notification" component = { NotificationScreen } />
                     <Tab.Screen name = "Dashboard" component = { DashboardScreen } />
                     <Tab.Screen name = "SetPlan" component = { SetPlanScreen } />
                    
                 </Tab.Navigator>
             );
         }

        render(){
            return(

                <Tab.Navigator
                        tabBarOptions ={{
                            style: {
                                    backgroundColor:"#white",
                                    // backgroundColor:"rgb(32,26,45)",
                                    height: 80,
                                    borderTopWidth:0,
                                    paddingTop:30,

                            }
                        }}
                >
                    <Tab.Screen 
                        name="Home"
                        component={HomeScreen}
                        options = {{
                        tabBarLabel: '',
                                tabBarIcon:({ color, size }) => (
                                    // <MCIcons name = "View-grid-outline" color = {'white'} size = {25} />
                                    <FAIcons name="credit-card" color = {'blue'} size= {25}   /> 
                                ),
                        }}
                    />

                    <Tab.Screen 
                        name = "Dashboard"
                        component = { DashboardScreen }
                        options = {{
                            tabBarLabel: '',
                                tabBarIcon:({ color, size }) => (
                                    <FONIcons name="pie-chart-1" color = {'grey'} size= {25}   />
                                ),
                        }}
                    /> 

                    <Tab.Screen 
                        name = "Notification"
                        component = {NotificationScreen}
                        options = {{
                            tabBarLabel: '',
                                tabBarIcon:({ color, size }) => (
                                    <MCIcons name="google-cardboard" color = {'grey'} size= {35}   />
                                ),
                        }}
                    />

                    <Tab.Screen 
                        name = "SetPlan"
                        component = {SetPlanScreen}
                        options = {{
                            tabBarLabel: '',
                                tabBarIcon:({ color, size }) => (
                                    <ENIcons name="user" color = {'grey'} size= {25}   />
                                ),
                        }}
                    />

                </Tab.Navigator>
            );
        }
    }

    const TabNavigationScreen = TabNavigation
    export { TabNavigationScreen };