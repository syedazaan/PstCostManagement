import React from 'react';
import { StyleSheet,Text,View,  Image,  ImageBackground,} from 'react-native';
 

class Monthly extends React.Component {
  render( ) {
    return (
      <View style= {styles.container}>
        <Text>Monthly</Text>
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

const MonthlyScreen = Monthly
export { MonthlyScreen };