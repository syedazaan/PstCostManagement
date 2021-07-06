import React from 'react';
import { StyleSheet, Text, View,  Image,   ImageBackground, } from 'react-native';


import { styles } from '../styles/styles';
import  Colors from '../styles/Colors';

 class App extends React.Component {
  render( ) {
    return (
      <View style= {styles.container}>
        <Text>Plus Page</Text>
      </View>
    );
  }
}

const styles =StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },
});
