import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

// term, onCityChange, onCitySubmit from the SearchScreen and then back to the SearchScreen
const CityInput = ({ city, onCityChange, onCitySubmit}) => {
    
    return (
        <View style={styles.topLevelStyle}>
            
            <Feather name='search' style={styles.levelOneAStyle}/>
            <TextInput 
                style={styles.levelOneBStyle}
                placeholder='City'
                autoCorrect={false}
                autoCapitalize='sentences'
                value={city}
                onChangeText={ onCityChange } // get new city and send back to SearchScreen
                onEndEditing={ onCitySubmit } // 'enter' has been pressed
            />
            
        </View>
    ); // end return
}; // end CityInput

const styles = StyleSheet.create({
    topLevelStyle: {
        backgroundColor: 'white',
        height: 50,
        borderRadius: 5,
        borderColor: 'lightgrey',
        borderWidth: 3,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 15,
        marginBottom: 2
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

export default CityInput;