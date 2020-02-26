import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

// fetch() is built-in to react, however requires more config +
// error handling compared to axios.

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        term,
        location: 'minneapolis'
      }
    });
    setResults(response.data.businesses);
  };

  return (
    <View>
      <SearchBar term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={searchApi}

      />
      <Text>{results.length} results</Text>
    </View>
  )
}

export default SearchScreen
