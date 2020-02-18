import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, Image, Linking, Button } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id'); // receive business id from ResultsList
    
    const getResult = async(id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect(() => {
        getResult(id);
    }, []);

    if(!result) {
        return null;
    }
     
    return (
        <View style={styles.topLevelStyle}>
            <Text style={styles.titleStyle}>{result.name} </Text>
            <Text style={styles.infoDetailStyle}>{result.display_phone.replace(') ',')')}</Text>
            <Text style={styles.infoDetailStyle}>{result.location.display_address[0]}</Text>
            <Text style={styles.infoDetailStyle}>{result.location.display_address[1]}</Text>
            <View style={styles.buttonViewStyle}>
                <Button
                title="Website"
                onPress={() => Linking.openURL(result.url)}
                />
            </View>
            
            <FlatList 
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
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