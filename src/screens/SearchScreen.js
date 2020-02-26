import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

// fetch() is built-in to react, however requires more config +
// error handling compared to axios.

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'minneapolis'
        }
      });
      setErrorMessage('');
      setResults(response.data.businesses);
    } catch (e) {
      setErrorMessage('something went wrong');
    }
  };

  // useEffect

  // useEffect (and useState) can take a second param [] to run the arrow function
  // only when the component is first rendered
  // can also pass array w/ value, and will re-render when value changes
  // main difference btw two is that useEffect allows functional components
  // to have life-cycle methods (like componentDidMount() etc)

  useEffect(() => {
    searchApi('pasta')
  }, []);

  return (
    <View>
      <SearchBar term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}

      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>{results.length} results</Text>

    </View>
  )
}

export default SearchScreen
