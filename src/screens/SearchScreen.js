import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState(''); // for search box
    const [searchApi, results, errorMessage] = useResults(); // call useResults

    const filterResultsByPrice = (price) => {
        // price === '$' || price === '$$' || price === '$$$'
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={newTerm => setTerm(newTerm)} // get search term
                onTermSubmit={() => searchApi(term)} // process search term
            /> 
            {errorMessage ? <Text>{errorMessage}</Text> : null } 
            
            <ScrollView> 
                <ResultsList 
                    title='Cost Effective $'
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
                    
            </ScrollView>
        </>
    ); // end return
}; // end SearchScreen

const styles = StyleSheet.create({});

export default SearchScreen;