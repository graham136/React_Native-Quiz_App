import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import AboutScreen from './Screens/AboutScreen';
import TableScreen from './Screens/TableScreen';
import useCachedResources from './hooks/useCachedResources';


const Drawer = createDrawerNavigator();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default function App(props) {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />          
            <Drawer.Screen name="About" component={AboutScreen} />
            <Drawer.Screen name="Tables" component={TableScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}
