import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList';

// fetch() is built-in to react, however requires more config +
// error handling compared to axios.

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter(result => {
      return result.price === price;
    })
  }

  return (
    <View>
      <SearchBar term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}

      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <Text>{results.length} results</Text>
      <ResultsList results={filterResultsByPrice('$$$')} title='Spendy'/>
      <ResultsList results={filterResultsByPrice('$$')} title='Bit pricier'/>
      <ResultsList results={filterResultsByPrice('$$$')} title='cheap' />

    </View>
  )
}

export default SearchScreen
