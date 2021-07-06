import React from 'react';
import { Text, Dimensions, StyleSheet, Image, View } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';


const Swiper = () => (
    <View style={styles.container}>
        <SwiperFlatList autoplay autoplayDelay={2} autoplayLoop index={2} showPagination>
            <View style={[styles.child,  { backgroundColor: 'lightgrey' }]}>
                <Image 
                    source = {require('../images/slide1.jpg')}
                    style = {{ flex:1, alignItems:"center", justifyContent:"center",  height:500, width:500}}
                />
                {/* <Text style={styles.text}>1</Text> */}
            </View>
        
            {/* <View style={[styles.child, { backgroundColor: 'lightgrey' }]}>
                <Image 
                    source = {require('../images/slide2.jpg')}
                    style = {{ flex:1, alignItems:"center", justifyContent:"center", height:500, width:500}}
                />
                <Text style={styles.text}>2</Text>
            </View>
      
            <View style={[styles.child, { backgroundColor: 'lightgrey' }]}>
                <Image 
                    source = {require('../images/slide3.jpg')}
                    style = {{ flex:1, alignItems:"center", justifyContent:"center", height:500, width:500}}
                />
                <Text style={styles.text}>3</Text>
            </View>
      
            <View style={[styles.child, { backgroundColor: 'lightgrey' }]}>
                <Image 
                    source = {require('../images/slide4.jpg')}
                    style = {{ flex:1, alignItems:"center", justifyContent:"center", height:500, width:500}}
                />
                <Text style={styles.text}>4</Text>
            </View> */}
        </SwiperFlatList>
    </View>
);

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  child: { width, justifyContent: 'center' },
  text: { fontSize: width * 0.5, textAlign: 'center' },
});

export default Swiper;