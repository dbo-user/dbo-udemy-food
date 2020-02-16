import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail';
import {withNavigation} from 'react-navigation';

const ResultsList = ({title, results, navigation}) => {
    return (
        <View style={styles.topLevelStyle} >
            <Text style={styles.titleStyle} >{title}</Text>
            <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id }
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow')}>
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    ); // end return 
                }}
            /> 
        </View>
    ); // end return
}; // end ResultsList

const styles = StyleSheet.create({
    topLevelStyle : {
        marginLeft: 2
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    }
});

export default withNavigation(ResultsList);