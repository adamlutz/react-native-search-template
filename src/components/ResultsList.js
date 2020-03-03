import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultsDetail from './ResultsDetail';


//const ResultsList = (props) => {  is actually this, but destructure
const ResultsList = ({title, results}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <Text style={styles.titleStyle}>{results.length}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal  // ={true} -- w/o is shortand
        data={results}
        keyExtractor={(result) => {
          return result.id
        }}
        renderItem={({ item }) => {
          return <ResultsDetail result={item}/>
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 5
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
  }
})

export default ResultsList
