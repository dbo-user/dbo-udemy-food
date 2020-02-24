import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
//import { formatPhoneNumber } from 'react-phone-number-input'

// ResultsDetail is called from ResultList line 37ish
// used to show the main search results
const ResultsDetail = ({result}) => {
    // prevents warning message if the business image url is missing
    if (result.image_url) {var img = {uri: result.image_url}} else {img = null}
    return (
        <View style={styles.topLevelStyle}> 
            <Image style={styles.imageStyle} source={img} />
            <Text style={styles.nameStyle}> {result.name} </Text>
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
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 5
    },
    nameStyle: {
        fontWeight: 'bold'
    }
});

export default ResultsDetail;