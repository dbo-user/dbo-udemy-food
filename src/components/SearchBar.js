import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange}) => {
    return <View style={styles.topLevelStyle}>
        <Feather name='search' style={styles.levelOneAStyle}/>
        <TextInput 
            style={styles.levelOneBStyle}
            placeholder='Search'
            autoCorrect={false}
            autoCapitalize='none'
            value={term}
            onChangeText={newTerm => onTermChange(newTerm)}
        />
    </View>
}; // end SearchBar

const styles = StyleSheet.create({
    topLevelStyle: {
        backgroundColor: 'white',
        height: 50,
        borderRadius: 5,
        borderColor: 'lightgrey',
        borderWidth: 3,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 10
    },
    levelOneAStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    },
    levelOneBStyle: {
        flex: 1,
        fontSize: 18
    }
});

export default SearchBar;