import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail';
import { TouchableOpacity } from 'react-native-gesture-handler';


//const ResultsList = (props) => {  is actually this, but destructure
const ResultsList = ({title, results, navigation}) => {
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
          return (
            <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
              <ResultsDetail result={item}/>
            </TouchableOpacity>
          )
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

// special version w/ access to navigation
export default withNavigation(ResultsList);
