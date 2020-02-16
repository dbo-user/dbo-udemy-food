import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
//import { formatPhoneNumber } from 'react-phone-number-input'

const ResultsDetail = ({result}) => {
    
    return (
        <View style={styles.topLevelStyle}>
            <Image style={styles.imageStyle} source={{uri: result.image_url}} />
            <Text style={styles.nameStyle}> {result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews  {result.display_phone.replace(') ',')')}</Text>
        </View>
    ); // end return
    
}; // end ResultsDetail

const styles = StyleSheet.create({
    topLevelStyle : {
        marginLeft: 15
    },
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    nameStyle: {
        fontWeight: 'bold'
    }
});

export default ResultsDetail;