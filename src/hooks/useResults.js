import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]); // results will store yelp search results
    const [errorMessage, setErrorMessage] = useState('');

    // make the API request to yelp using searchTerm and city
    const searchApi = async (searchTerm, city) => {
        // using try, catch to catch errors if request failed
        try { // assign search results from yelp to response
            const response = await yelp.get('/search', {
                params: { // spelling of params is from yelp website page - limit, term, location
                    limit: 30,
                    term: searchTerm, 
                    location: city
                }
            });
            setResults(response.data.businesses); // update results with yelp search results
            setErrorMessage(''); // reset error message
        } catch(err) {
                setErrorMessage('     ***Are you sure about the City???'); // just seting the message, it is displayed in SearchScreen line 43ish
                
        } // end try that catches request errors
    }; // end searchApi

    // useEffect is a hook or function that runs only 1 time at the start
    // cause search reults to show for opening screen just one time
    useEffect (() => {
        searchApi('restaurant', 'Emerald Isle, NC'); // call Api with these hard coded terms just to have results on the opening screen
    }, []); // the empty array on the end means run searchApi only 1 time

    return [searchApi, results, errorMessage]; // searchScreen needs these 3 things
};