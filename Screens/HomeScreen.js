import * as React from 'react';
import {  StyleSheet, Text, View, Button } from 'react-native';
import { BackHandler } from 'react-native';

// Landing screen. Used to select the multiplication table
const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <View style={styles.cardContainer}>
                <Text style={styles.headerText}>Multiplication</Text>
                <Text style={styles.headerText}>Tables</Text>
                <Text style={styles.questionText}>Please select a table?</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.button_1}>
                        <Button color='red' title='1' onPress={() => { navigation.navigate('Tables',{ multiplyTable: 1}) }} />
                    </View>
                    <View style={styles.button_1}>
                        <Button color='orange' title='2' onPress={() => { navigation.navigate('Tables',{ multiplyTable: 2}) }} />
                    </View>
                    <View style={styles.button_1}>
                        <Button color='yellow' title='3' onPress={() => { navigation.navigate('Tables',{ multiplyTable: 3}) }} />
                    </View>
                    <View style={styles.button_1}>
                        <Button color='green' title='4' onPress={() => { navigation.navigate('Tables',{ multiplyTable: 4}) }} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.button_1}>
                        <Button color='blue' title='5' onPress={() => { navigation.navigate('Tables',{ multiplyTable: 5}) }} />
                    </View>
                    <View style={styles.button_1}>
                        <Button color='indigo' title='6' onPress={() => { navigation.navigate('Tables',{ multiplyTable: 6}) }} />
                    </View>
                    <View style={styles.button_1}>
                        <Button color='violet' title='7' onPress={() => { navigation.navigate('Tables',{ multiplyTable: 7}) }} />
                    </View>
                    <View style={styles.button_1}>
                        <Button color='darkred' title='8' onPress={() => { navigation.navigate('Tables',{ multiplyTable: 8}) }} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.button_1}>
                        <Button color='darkorange' title='9' onPress={() => { navigation.navigate('Tables',{ multiplyTable: 9}) }} />
                    </View>
                    <View style={styles.button_1}>
                        <Button color='yellow' title='10' onPress={() => { navigation.navigate('Tables',{ multiplyTable: 10}) }} />
                    </View>
                    <View style={styles.button_1}>
                        <Button color='lightgreen' title='11' onPress={() => { navigation.navigate('Tables',{ multiplyTable: 11}) }} />
                    </View>
                    <View style={styles.button_1}>
                        <Button color='purple' title='12' onPress={() => { navigation.navigate('Tables',{ multiplyTable: 12}) }} />
                    </View>
                </View>
                <View style={styles.button_2}>
                    <Button title='Exit' onPress={() => { BackHandler.exitApp(); }} />
                </View>
            </View>

        </View>
    );
}

export default HomeScreen;


// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
    },
    cardContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'grey',
        borderStyle: 'dashed',
        margin: 20,
        marginBottom: 20,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },
    contentContainer: {
        paddingTop: 30,
        marginVertical: 10,
    },
    headerText: {
        fontSize: 30,
        color: 'dodgerblue',
        textAlign: 'center',   
        padding: 2,     
    },
    
    questionText: {
        fontSize: 20,
        color: 'dodgerblue',
        textAlign: 'center',        
    },
    button_1: {
        width: '20%',
        height: 30,
        margin: 5,
        marginTop: 5,
        marginBottom: 25,
        alignSelf: 'center',
    },
    button_2: {
        width: '90%',
        height: 30,
        margin: 5,
        marginTop: 5,
        marginBottom: 25,
        alignSelf: 'center',
    },
});
