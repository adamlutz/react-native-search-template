import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultsDetail from './ResultsDetail';


//const ResultsList = (props) => {  is actually this, but destructure
const ResultsList = ({title, results}) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <Text style={styles.titleStyle}>{results.length}</Text>
      <FlatList
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
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  }
})

export default ResultsList
