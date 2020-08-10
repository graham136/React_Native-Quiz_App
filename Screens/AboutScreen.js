import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// About screen. Used to display info on the project/
const AboutScreen= ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View>
          <Text style = {styles.headerText}>Mathematics</Text>
          <Text style = {styles.headerText}>Grade 3</Text>
          <Text style = {styles.paragraphText}>App was written in React Native using Expo and Visual Studio Code</Text>         
          <Button title='Exit' onPress={() => {navigation.navigate('Home')}}/> 
        </View>
      </ScrollView>       
    </View>
  );
}

AboutScreen.navigationOptions = {
  header: null,
};

export default AboutScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    contentContainer: {
      paddingTop: 30,
      marginVertical: 10,   
    },
    headerText: {
      fontSize: 30,
      color: 'dodgerblue',
      textAlign: 'center',
    }, 
  });
  