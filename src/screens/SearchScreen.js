import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [term, setTerm] = useState('');


  return (
    <View>
      <SearchBar term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => console.log('submitted')}
      />
      <Text>search screen</Text>
      <Text>{term}</Text>
    </View>
  )
}

export default SearchScreen
