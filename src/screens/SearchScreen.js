import React, { useState } from 'react';
import { Text, ScrollView } from 'react-native';
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

    // a lot of styles can be solved w/ flex 1 of most parent view in android
    // <View style={{ flex: 1 }}
    // another approach is to add an empty element
    // when a <view> element would harm layout overall
    <>
      <SearchBar term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}

      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <ResultsList
          results={filterResultsByPrice('$$$')}
          title='Spendy'/>

        <ResultsList
          results={filterResultsByPrice('$$')}
          title='Bit pricier'/>

        <ResultsList
          results={filterResultsByPrice('$$$')}
          title='cheap' />

      </ScrollView>
    </>
  )
}

export default SearchScreen
