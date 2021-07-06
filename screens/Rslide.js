import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'

import Main from './Main';  
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Login from './Login';

import { styles } from '../styles/styles';
import Colors from '../styles/Colors';

// import Main from './Main';


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


import Swiper from 'react-native-swiper'
 
 
export default class Rslide extends Component {
    constructor(props){
        super(props)
            this.state = {
                test : true,
            }
    }

    render() {
      const  { navigation } = this.props
        return (
            <Swiper style={styles1.wrapper} showsButtons={true}>
                <View style={styles1.slide1}>
                    {/* <Text style={styles1.text}>Hello Swiper</Text> */}
                    <Main  navigation={navigation}  />
                </View>
            
            <View style={styles1.slide2}>
                {/* <Text style={styles1.text}>Beautiful</Text> */}
               <Slide1 />
             </View>

            <View style={styles1.slide3}>
                {/* <Text style={styles1.text}>And simple</Text> */}
                <Slide2 />
            </View>
      </Swiper>
    )
  }
}

const styles1 = StyleSheet.create({
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  })