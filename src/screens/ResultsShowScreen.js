import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, Image, Linking, Button } from 'react-native';
import yelp from '../api/yelp';

// called from ResultsScreen line 36ish TouchableOpacity and recieve navaigation which contains the business id
const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null); // null to start but line 13 will update the result state
    const id = navigation.getParam('id'); // receive business id from ResultsList navigation object
    
    // use the business id from ResultsList to get the same business from yelp
    const getResult = async(id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data); // update the result state with one object
    };
    // useEffect is a hook or function that runs only 1 time
    useEffect(() => {
        getResult(id); // call getResult only one time
    }, []); // the empty array on the end means run useEffect only 1 time

    // if result is empty then skip the last return, don't try to show an empty result becasue that will cause errors
    if(!result) {
        return null; // return null and then exit
    }
     
    // result is okay so display the result
    return (
        <View style={styles.topLevelStyle}>
            <Text style={styles.titleStyle}>{result.name} </Text>
            <Text style={styles.infoDetailStyle}>{result.display_phone.replace(') ',')')}</Text>
            <Text style={styles.infoDetailStyle}>{result.location.display_address[0]}</Text>
            <Text style={styles.infoDetailStyle}>{result.location.display_address[1]}</Text>
            <View style={styles.buttonViewStyle}>
                <Button
                title="Website"
                onPress={() => Linking.openURL(result.url)} // links to the yelp webiste for this business
                />
            </View>
            
            <FlatList // use FlatList to show scrolable list of images of business
                data={result.photos} // photos is an array of 3 images
                keyExtractor={(photo) => photo} // photo is the image url so it's unique
                renderItem={({item}) => { // FlatList and renderItem will loop thru array and show all 3 images
                    return <Image style={styles.imageStyle} source={{uri: item}} />
                }}
            />

        </View>
    ); // end return
}; // end ResultsShowScreen

const styles = StyleSheet.create({
    topLevelStyle : {
        marginLeft: 2,
        marginTop: 5
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 6
    },
    infoDetailStyle: {
        marginLeft: 15,
    },
    imageStyle: {
        width: 250,
        height: 120,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 5,
        marginLeft: 15
    },
    buttonViewStyle: {
        marginRight: 145,
        marginLeft: 15,
        marginBottom: 8,
        marginTop: 5
    }
});

export default ResultsShowScreen;