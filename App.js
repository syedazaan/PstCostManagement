import * as React from 'react';
// import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { styles } from"./styles/styles";
import  Colors from "./styles/Colors";

import Main from './screens/Main';
import Login from './screens/Login';
import TabNavigation, { TabNavigationScreen } from './screens/TabNavigation';
import Slide1 from './screens/Slide1';
import Slide2 from './screens/Slide2';
import Rslide from './screens/Rslide';
import Notification from './screens/Notification';

// const HomeStack = createStackNavigator();

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
               screenOptions={{
                   headerShown: false
               }}
            > 
                <Stack.Screen name ="Rslide" component={Rslide} />
                {/* <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="Slide1" component={ Slide1 } />
                <Stack.Screen name="Slide2" component={ Slide2 } /> */}
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="TabNavigation" component={ TabNavigationScreen } />
                {/* <Stack.Screen name="Notification" component={ Notification } /> */}

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

// export default class App extends Component {


  
// render() {
//     return (
//         <NavigationContainer>
//             <HomeStack.Navigator>
//                  <HomeStack.Screen name ="Main" component = {Main} />
//                  <HomeStack.Screen name ="Login" component = {Login} />
//             </HomeStack.Navigator>
//         </NavigationContainer>
//     );
// } 
// };

// function App() {
//   return (
//     <View style={{ flex: 1, }}>
//         <Main />
//         <Login />
//     </View>
//   );
// }

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Login" component={Login } />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;






// export const MainNavigator = createStackNavigator(
//   {
//     Main: {screen:Main},
//     Login:{screen:Login},
//   },
// );

// const App = createAppContainer(MainNavigator);
// export default App;



// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }
