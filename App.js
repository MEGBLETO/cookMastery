import React, { useContext } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Homescreen from './src/screens/Homescreen';
import MainPage from './src/screens/MainPage';
import Browsingscreen from './src/screens/Browsingscreen';
import DescriptionPage from './src/screens/DescriptionPage';
import { LikedContextProvider } from './src/contexts/Likecontext';
import FavoritesScreens from './src/screens/FavoritesScreens';

const Stack = createNativeStackNavigator();

function App() {


  return (
    <LikedContextProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="main" component={MainPage} />
        <Stack.Screen name="browse" component={Browsingscreen} />
        <Stack.Screen name="details" component={DescriptionPage} />
        <Stack.Screen name="favorite" component={FavoritesScreens} />
      </Stack.Navigator>
    </NavigationContainer>
    </LikedContextProvider>
  );
}

export default App;
