import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons'; // the search icon magnify glass

// term, onTermChange, onTermSubmit from the SearchScreen and then back to the SearchScreen
const SearchBar = ({ term, onTermChange, onTermSubmit}) => {
    
    return (
        <View style={styles.topLevelStyle}>
            
            <Feather name='search' style={styles.featherIconStyle}/>  
            <TextInput 
                style={styles.textInputStyle}
                placeholder='Search ex. restaurants, hardware etc.'
                autoCorrect={false}
                autoCapitalize='sentences'
                value={term}
                onChangeText={ onTermChange } // get new search term and send to SearchScreen
                onEndEditing={ onTermSubmit } // 'enter' has been pressed
            />
            
        </View>
    ); // end return
}; // end SearchBar

const styles = StyleSheet.create({
    topLevelStyle: {
        backgroundColor: 'white',
        height: 50,
        borderRadius: 5,
        borderColor: 'lightgrey',
        borderWidth: 3,
        marginHorizontal: 15,
        flexDirection: 'row', // puts 'search' on same line as icon
        marginTop: 10,
        marginLeft: 15,
        marginBottom: 2
    },
    featherIconStyle: {
        fontSize: 35,
        alignSelf: 'center', // centers just the icon
        marginHorizontal: 15 // adds spacing on the left and right sides of the icon
    },
    textInputStyle: {
        flex: 1, // stretches text input area out horizontally
        fontSize: 18
    }
});

export default SearchBar;