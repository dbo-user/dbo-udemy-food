import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail';
import {withNavigation} from 'react-navigation'; // gives direct access to the navigation prop

// called from SearchScreen line 46ish
let count = 0; // trying to trap invalid search category
const ResultsList = ({title, results, navigation}) => {
   let termErrorMsg = '';
   
   // if search goes thru all 4 prices and length is still null then assume bad category
    if(!results.length){
        count ++;
        termErrorMsg = '';
        if(count > 4) {
            termErrorMsg = '     ***Are you sure about the search category?';
            count=0; // reset
        } else {termErrorMsg = '';}
    // if the results length is empty after 4 tries then don't show the titles instead show msg
        return <Text style={{marginTop:-10}}>{termErrorMsg}</Text>; // show msg and exit
    } 
    else { // search category is okay so reset and continue to the next return
        count=0; // reset
        termErrorMsg = ''; // reset
    }

    return (
        <View style={styles.topLevelStyle} >
            <Text style={styles.titleStyle} >{title}</Text>
            <FlatList 
                horizontal={true} // default is vertical scroll
                showsHorizontalScrollIndicator={false}
                data={results} // list of data from yelp search
                keyExtractor={(result) => result.id } // must use keyExtractor, it's like an identifying key for each item
                renderItem={({item}) => { // renderItem will render item which is the results data object
                    return ( // TouchableOpacity makes each item act like a button to navigate to ResultShowScreen and pass the item or business id
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow',{id:item.id })}> 
                            <ResultsDetail result={item} />  
                        </TouchableOpacity> // use ResultsShowScreen to show the results of the one item that was clicked
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

// include navaigation prop with ResultsList
// so export a special version of ReslutsList that has access to navaigation
export default withNavigation(ResultsList);