import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]); // for yelp api
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async searchTerm => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 30,
                    term: searchTerm,
                    location: 'emerald isle'
                }
            });
            setResults(response.data.businesses);
        } catch(err) {
                setErrorMessage('Something went wrong, try again later.');
        } // end try that catches errors
    }; // end searchApi

    // casue search reults to show for opening screen just one time
    useEffect (() => {
        searchApi('restaurant');
    }, []);

    return [searchApi, results, errorMessage];
};