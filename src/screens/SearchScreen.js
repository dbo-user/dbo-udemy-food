import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native'; // ScrollView automatically enables vertical scrolling
import SearchBar from '../components/SearchBar';
import CityInput from '../components/CityInput';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

// SearchScreen component that does the actual searching with yelp
const SearchScreen = () => {
    // set State. setTerm and setCity will be updated in SearchBar and CityInput
    const [term, setTerm] = useState(''); // for search box
    const [city, setCity] = useState(''); // for city
    // results - the search results from yelp
    const [searchApi, results, errorMessage] = useResults(); // call useResults to get these 3 things
    // price is either  1, 2, 3 or 4 $ signs from yelp
    const filterResultsByPrice = (price) => {
        // price === '$' || price === '$$' || price === '$$$' || price === '$$$$'
        return results.filter(result => {
            return result.price === price;
        });
    };
    // if the price is missing we'll still display the business in the last category
    const filterNoPrice = (price) => {
        // if price is missing or unknown
        return results.filter(result => {
            return result.price != '$' && result.price != '$$' && result.price != '$$$' && result.price != '$$$$';
        });
    };

    return (
        // empty element placeholder was a View element, this technique also eliminates the need for flex:1
        <> 
            <CityInput
                city={city}
                onCityChange={newCity => setCity(newCity)} // get new city from CityBar
                onCitySubmit={() => searchApi(term,city)} // process Api search in UseResults
            /> 
            <SearchBar
                term={term}
                onTermChange={newTerm => setTerm(newTerm)} // get new search term from SearchBar
                onTermSubmit={() => searchApi(term,city)} // process Api search in UseResults
            /> 
            
            {errorMessage ? <Text>{errorMessage}</Text> : null } 
            
            <ScrollView> 
                <ResultsList 
                    title='Budget Friendly $'
                    results={filterResultsByPrice('$')}
                     />
                <ResultsList 
                        title='Bit Pricer $$'
                        results={filterResultsByPrice('$$')}
                        />
                <ResultsList 
                    title='Big Spender $$$'
                    results={filterResultsByPrice('$$$')}
                    />
                <ResultsList 
                    title='High Dollar $$$$'
                    results={filterResultsByPrice('$$$$')}
                    />
                <ResultsList 
                    title='Price Not Listed'
                    results={filterNoPrice('')} // price was missing for these businesses
                    />   
                    
            </ScrollView>
        </>
    ); // end return
}; // end SearchScreen

const styles = StyleSheet.create({});

export default SearchScreen;